import React from 'react';
import styles from './header-button.module.css';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

export default function HeaderButton({text, children, link}) {
    return (
      <Link className='resetted-link' to={link}>
        <div className={`${styles.button} pt-4 pb-4 pl-5 pr-5`}>
          {children}
          <span className='pl-2'>{text}</span>
        </div>
      </Link>
    )
}

HeaderButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.element
}