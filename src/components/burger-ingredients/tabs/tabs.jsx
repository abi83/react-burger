import {Tab} from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab';
import React from 'react';
import PropTypes from 'prop-types';

import style from './tabs.module.css'

export default class Tabs extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      current: 'bun',
    };
    this.setCurrent = this.setCurrent.bind(this)
  }
  setCurrent = (value) => {
    this.setState({current: value})
  }
  render() {
    return (
      <div className={style.tabs}>
        {this.props.tabs.map((tab,index)=>{
          return(
                <Tab key={tab.id} value={tab.id} active={this.state.current === tab.id} onClick={this.setCurrent}>
                  {tab.name}
                </Tab>
                )})}
      </div>
  )}
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
}