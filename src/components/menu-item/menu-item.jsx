import React from 'react';
import {withRouter} from 'react-router-dom';


import './menu-item.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='menu-item__image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='menu-item__content'>
      <h1 className='menu-item__content--title'>{title.toUpperCase()}</h1>
      <span className='menu-item__content--subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
