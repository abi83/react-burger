import React from 'react';
import styles from './header-button.module.css';

export default class HeaderButton extends React.Component{
  render() {
    return (
    <div className={`${styles.button} pt-4 pb-4 pl-5 pr-5 mb-4 mt-4`}>
      {this.props.children}
      <span className='pl-2'>{this.props.text}</span>
    </div>
  )}
}