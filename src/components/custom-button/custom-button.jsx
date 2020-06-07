import React from 'react';
import './custom-button.scss';

function CustomButton({children, ...otherProps}) {
    return(
        <div className = 'custom-button' {...otherProps}>
            {children}
        </div>
    )
}

export default CustomButton;