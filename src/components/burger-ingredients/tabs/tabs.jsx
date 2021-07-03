import {Tab} from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab';
import React from 'react';
import PropTypes from 'prop-types';

import style from './tabs.module.css'

export default function Tabs({tabs, activeTabId, onClick}) {
  return (
    <div className={style.tabs}>
      {tabs.map(tab=>{
        return(
          <Tab key={tab.id} value={tab.id} active={tab.id === activeTabId} onClick={onClick}>
            {tab.name}
          </Tab>
          )})}
    </div>
  )
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object),
  activeTabId: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}