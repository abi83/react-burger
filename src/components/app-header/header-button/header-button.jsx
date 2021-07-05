import React from 'react';
import styles from './header-button.module.css';
import PropTypes from 'prop-types';

export default function HeaderButton({text, children}) {
    return (
    <div className={`${styles.button} pt-4 pb-4 pl-5 pr-5 mb-4 mt-4`}>
      {children}
      <span className='pl-2'>{text}</span>
    </div>
  )
}

HeaderButton.propTypes = {
  text: PropTypes.string.isRequired
}