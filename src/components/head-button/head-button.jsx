import React from 'react';
import styles from './head-button.module.css';

export default class HeadButton extends React.Component{
  state = {active: true}
  render() {
    return (
    <div className={styles.button}>
      {this.props.children}
      <span className={styles.text}>{this.props.text}</span>
    </div>
  )}
}