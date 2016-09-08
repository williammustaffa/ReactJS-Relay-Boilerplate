import React from 'react';
import Style from './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <main>
        <header>header</header>
        <section className={Style.viewport}>
          {React.cloneElement(this.props.children, {update: this.update, close: this.closeTab, ...this.state})}
        </section>
        <footer></footer>
      </main>
    );
  }
}
