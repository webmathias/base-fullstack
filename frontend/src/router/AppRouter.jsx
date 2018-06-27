import React, { Component } from 'react'
import { Router, Route } from 'react-router';
import createHashHistory from 'history/createHashHistory';
import { connect } from 'react-redux'
import MenuApp from './AppMenu';
import { goto } from '../modules/app/appReducers';

import Loadable from 'react-loadable';
import Loader from '../modules/app/Loader'

const LoadableModule = Loadable({
    loader: () => import('../modules/example/ModuleList'),
    loading: (props) => <Loader {...props} />
});

const history = createHashHistory({
    queryKey: false
})
const routes = [
    {
        title: 'Module',
        path: '/module',
        component: LoadableModule
    }
];
class RouterConfig extends Component {
    componentDidMount() {
        const { changeUrl, login } = this.props;

        changeUrl(history.location.pathname)

    }
    shouldComponentUpdate(nextProps) {
        if (nextProps.currentUrl && nextProps.currentUrl != this.props.currentUrl) {
            history.push(nextProps.currentUrl)
        }
        return true;
    }

    render() {
        const { changeUrl } = this.props;
        return (
            <Router history={history}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2">
                            <MenuApp routes={routes} changeUrl={changeUrl} />
                        </div>
                        <div className="col-10">
                            {routes.map((route, index) => <Route key={index} path={route.path}
                                component={route.component} />)}
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}
const mapStateToProps = (state) => ({
    currentUrl: state.menu.currentUrl
})
const mapDispatch = (dispatch) => ({
    changeUrl: (url) => {
        //history.push(url);
        dispatch(goto(url));
    }
});
export default connect(mapStateToProps, mapDispatch)(RouterConfig);
