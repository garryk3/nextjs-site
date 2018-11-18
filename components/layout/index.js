import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import Head from '../head';
import Header from '../header';
import Footer from '../footer';
import Sidebar from '../sidebar';

const Layout = (props) => (
    <Fragment>
        <Head/>
        <Grid
            container
            spacing={16}
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