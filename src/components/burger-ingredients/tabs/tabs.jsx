import {Tab} from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab';
import React from 'react';
import PropTypes from 'prop-types';

import style from './tabs.module.css'

export default class Tabs extends React.Component{
  render() {
    return (
      <div className={style.tabs}>
        {this.props.tabs.map((tab,index)=>{
          return(
            <Tab key={tab.id} value={tab.id} active={tab.active} onClick={onclick}>
              {tab.name}
            </Tab>
            )})}
      </div>
  )}
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
}