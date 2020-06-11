import React, {Component} from 'react'
import './directory.scss'
import MenuItem from '../menu-item/menu-item'

import {connect} from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory-selectors';
import {createStructuredSelector} from 'reselect';

function Directory({sections}) {

  return(
    <div className = 'directory-menu'>

    {this.state.sections.map(({id, ...otherSectionProps}) => (
        <MenuItem key={id} {...otherSectionProps} />
    ))}
    </div>
)

}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
}) 


    
      


export default connect(mapStateToProps)(Directory);