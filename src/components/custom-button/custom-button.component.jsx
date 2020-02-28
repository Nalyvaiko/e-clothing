import React from 'react';

import './custom-button.styles.scss';

export default function CustomButton({ children, isGoogleSignIn, ...otherProps }) {
    return (
        <div className={`${isGoogleSignIn ? 'google-sign-in ' : ''}custom-button`} {...otherProps}>
            {children}
        </div>
    );
}
