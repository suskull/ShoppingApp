import React from 'react';


import CollectionPreview from '../../components/collection-preview/collection-preview';
import {connect} from 'react-redux';
import {selectShopCollections} from '../../redux/shop/shop-selectors';
import {createStructuredSelector} from 'reselect';

function Shop({collections}) {

    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
})
 

export default connect(mapStateToProps)(Shop);
