import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import Head from '../head';
import Header from '../header';
import Footer from '../footer';
import Sidebar from '../sidebar';

import classnames from 'classnames/bind';
import style from './style.css';

const cn = classnames.bind(style);

const Layout = (props) => (
    <Fragment>
        <Head/>
        <Grid
            container
            spacing={16}
            className={cn('layout__container')}
        >
            <Grid item xs={12}>
                <Header/>
            </Grid>
            <Grid item xs={3}>
                <Sidebar/>
            </Grid>
            <Grid item xs={9}>{props.children}</Grid>
            <Grid item xs={12}>
                <Footer/>
            </Grid>
        </Grid>
    </Fragment>
);

Layout.propTypes = {
  children: PropTypes.element
};

export default Layout;