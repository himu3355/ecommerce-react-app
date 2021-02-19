import React, {Component} from 'react';

import { Route } from 'react-router-dom';
import classes from './Layout.module.css';
import NavigationBar from '../../Components/NavigationBar/NavigationBar';

import Home from '../../Containers/Home/Home';
import Products from '../../Containers/Products/ProductsPage';
import Footer from '../Footer/Footer';

class Layout extends Component {
    render() {
        return (
            <div className={classes.App}>
                <header>
                    <NavigationBar />
                </header>
                <Route exact path="/products" component={Products}/>
                <Route exact path="/" component={Home}/>
                <Footer />
            </div>
        );
    }
}

export default Layout;