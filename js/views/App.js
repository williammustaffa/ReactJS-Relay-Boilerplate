import React from 'react';
import Style from './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <header>header</header>
        <section className={Style.viewport}>
          {React.cloneElement(this.props.children)}
        </section>
        <footer></footer>
      </main>
    );
  }
}
