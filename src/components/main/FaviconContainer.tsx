import * as React from 'react';
import Favicon from 'react-favicon'

interface IFaviconContainerProps {
}

const FaviconContainer: React.FunctionComponent<IFaviconContainerProps> = (props) => {

    return <>

        <Favicon url={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACA0lEQVRYhe2WP2gUQRTGH1r4B60sLBSr9Cnk5r01CaYQLBSCwh5oFSQct+9tOOwEG+ucnYUiNoEUdoIWclxhY8BOtEkhGFCxSHbe3EEUhOBZmMOddSVenDPNfvCa2Tfv+82+mdkFqFQpoGpsz5mkF5ukF5P06tHNj0f+KwCJPiXRwTAmm9mpCmB8bncGB0yyMVNLNs8Pg0RX8wA1zq5SqlMm0ZmomZmg/rSYXcib/UV8DQuQukf7BjCx+O4QidN9A0Bxc4Xiq0b0Mom+zI9jqg2T2NgkNo4kuxIMgFgf+wC2vjO+4gG0tk4GMx1qljeOkehWzkhn59cPBwMg1tvIto1s2yi6FBXOcpTqdW/1nN3PzQ0AkOo938De9Z6LPvNffx+DAkTcnyBx27lC9mzj81EAACOfTpC4b7ner3lwofYAsj7xV9lbAADARBueAeutcQFM+23QNwAAJPoiN76NC/b0WAB2zF7li/3cfL9ag2w7v80JC2DrXjH/6A0M67XdAIonaCTF8eAgiXtfdq2iqCv720HWZQ8y0Ut7BgAAwNS1/gDwoDRfdKlwQ34hdl1i2yW23ZEBpm5sHkdRVwQwYqOyfJI+kuj30o8R6/rIAAAAyNouFFsbMf/fAKZbeoZEn2OqHUy1Q5zN7zbHNO1FTN0yir5G0Q8k+pbYPtwTQKVK49YPUO2Jt4nJkd4AAAAASUVORK5CYII='} />

    </>;

};

export default FaviconContainer;
