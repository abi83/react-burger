import {Tab} from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab';
import React from 'react';
import style from './tabs.module.css'

export default class Tabs extends React.Component{
  constructor(props) {
    super(props);
    this.myRef = React.createRef()
    this.state = {
      current: 'one',
    };
    this.setCurrent = this.setCurrent.bind(this)
  }
  // TODO: tabs values as props
  setCurrent = (value) => {
    this.setState({current: value})
  }
  render() {
    return (
      <div className={style.tabs} ref={this.myRef}>
        <Tab value='one' active={this.state.current === 'one'} onClick={this.setCurrent}>
          Булки
        </Tab>
        <Tab value='two' active={this.state.current === 'two'} onClick={this.setCurrent}>
          Соусы
        </Tab>
        <Tab value='three' active={this.state.current === 'three'} onClick={this.setCurrent}>
          Начинки
        </Tab>
      </div>
  )}
}