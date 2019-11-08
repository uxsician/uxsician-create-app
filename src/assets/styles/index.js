import React from 'react';
import Normalize from './normalize';
import FontFaces from './font-faces';
import Global from './global';

function GlobalStyles() {
    return (
        <>
            <Normalize />
            <FontFaces />
            <Global />
        </>
    );
}

export default GlobalStyles;
