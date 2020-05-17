import React, { Children } from 'react';
import './custom-button.style.scss';

const CustomButtom = ({children,inverted,isGoogleSignIn,...otherProps}) => {
    return (
        <button
            className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
            {...otherProps}
        >{children}</button>
    )
}


export default CustomButtom;