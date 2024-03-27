import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div>
     <h1 align='center'>Student Manager</h1>
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
    </div>);
};

export default Card;