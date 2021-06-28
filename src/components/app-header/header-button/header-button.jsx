import React from 'react';
import styles from './header-button.module.css';

export default class HeaderButton extends React.Component{
  state = {active: true}
  render() {
    return (
    <div className={styles.button}>
      {this.props.children}
      <span className={styles.text}>{this.props.text}</span>
    </div>
  )}
}