import {Tab} from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab';
import React from 'react';

export default class Tabs extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      current: 'one',
    };
    this.setCurrent = this.setCurrent.bind(this)
  }
  setCurrent = (value) => {
    this.setState({current: value})
  }
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <Tab value="one" active={this.state.current === 'one'} onClick={this.setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={this.state.current === 'two'} onClick={this.setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={this.state.current === 'three'} onClick={this.setCurrent}>
          Начинки
        </Tab>
      </div>
  )}
}