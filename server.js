import express from 'express';
import graphQLHTTP from 'express-graphql';
import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import { Schema } from './data/schema';
import WebPackConfig from './webpack.config';
import childProcess from 'child_process';

const APP_PORT = 3000;
const GRAPHQL_PORT = 8080;

// Expose a GraphQL endpoint
var graphQLServer = express();
graphQLServer.use('/', graphQLHTTP({
  graphiql: true,
  pretty: true,
  schema: Schema,
  hot: true,
}));

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`
));

WebPackConfig.entry.unshift('webpack/hot/dev-server');
WebPackConfig.entry.unshift(`webpack-dev-server/client?http://localhost:${APP_PORT}/`);
WebPackConfig.entry.unshift('react-hot-loader/patch');
WebPackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

var compiler = webpack(WebPackConfig);
var app = new WebpackDevServer(compiler, {
  contentBase: '/public/',
  proxy: { '/graphql': `http://localhost:${GRAPHQL_PORT}` },
  publicPath: '/assets/js/',
  stats: { colors: true },
  hot: true,
});

// Serve static resources
app.use('/', express.static(path.resolve(__dirname, 'public')));
app.listen(APP_PORT, () => {
  console.log(`App is now running on http://localhost:${APP_PORT}`);
});
