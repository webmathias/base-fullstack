import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import Loader from './modules/app/Loader' 
const LoadableApp = Loadable({
    loader: () => import('./modules/app/App'),
    loading: (props) => <Loader {...props} />,
});

Loadable.preloadReady().then(() => {
    console.log("carregado")
    ReactDOM.hydrate(<LoadableApp />, document.getElementById('app'));
});

