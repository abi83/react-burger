import {Tab} from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab';
import React from 'react';
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
        {this.props.tabs.map(tab=>{
          const [tabID, tabName] = Object.values(tab);
          return(
                <Tab value={tabID} active={this.state.current === tabID} onClick={this.setCurrent}>
                  {tabName}
                </Tab>
                )})}
      </div>
  )}
}