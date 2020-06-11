import React from 'react';
import './collection-overview'



import CollectionPreview from '../collection-preview/collection-preview';
import {connect} from 'react-redux';
import {selectShopCollections} from '../../redux/shop/shop-selectors';
import {createStructuredSelector} from 'reselect';

function CollectionOverview({collections}) {
    return (
        <div className='collections-overview'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    )
}


const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
  })

export default connect(mapStateToProps)(CollectionOverview);
