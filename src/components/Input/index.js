import React from 'react';

export default ({className="", ...props}) => (
    <input
        className={`
            rounded-3
            form-control
            focus-2-visible
            ${className}
        `}
        {...props}
    >
    </input>
);
