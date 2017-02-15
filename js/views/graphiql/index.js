import React, { Component } from 'react';
import GraphiQL from 'graphiql';
import { graphql } from 'graphql';
import { Schema } from '../../../data/schema';

const Fetcher = (graphQL) => graphql(Schema, graphQL.query, null, graphQL.variables);

export default () => <GraphiQL fetcher={Fetcher} schema={Schema}/>;

export function path() {
  return '/graphiql';
}