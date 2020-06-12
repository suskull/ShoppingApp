import React from 'react';
import './collection-overview'



import CollectionPreview from '../collection-preview/collection-preview';
import {connect} from 'react-redux';
import {selectCollectionsForPreview} from '../../redux/shop/shop-selectors';
import {createStructuredSelector} from 'reselect';

function CollectionOverview({collections,match}) {
  console.log(collections);
    return (
        <div className='collections-overview'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} match={match} />
        ))}
      </div>
    )
}


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
  })

export default connect(mapStateToProps)(CollectionOverview);
