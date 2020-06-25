import React from 'react';
import CustomButton from '../custom-button/custom-button';

import  {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart-actions';

import './collection-item.scss';

const CollectionItem = ({ item, addItem }) => {
  const {name,price,imageUrl} = item;
  return(
    <div className='collection-item'>
      <div
        className='collection-item__img'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-item__footer'>
        <span className='collection-item__footer--name'>{name}</span>
        <span className='collection-item__footer--price'>{price+'$'}</span>
      </div>
      <CustomButton onClick = {() => addItem(item)} inverted>Add to cart</CustomButton>
    </div>
  )
  
};

const mapDispatchToProps = dispatch => ({
  addItem: (item) => dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem);
