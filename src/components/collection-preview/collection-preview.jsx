import React from 'react';

import CollectionItem from '../collection-item/collection-item';

import './collection-preview.scss';
import {withRouter} from 'react-router-dom';


function CollectionPreview ({ title, items, match,history,routeName}) {

  return(
    <div className='collection-preview'>
    <h1 
    className='collection-preview__title'
    onClick={() => history.push(`${match.url}/${routeName}`)}
    >{title.toUpperCase()}
    </h1>
    <div className='collection-preview__items'>
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
  )
}
export default withRouter(CollectionPreview);
