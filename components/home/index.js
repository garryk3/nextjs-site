import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import Layout from '../layout';

import classnames from 'classnames/bind';
import style from './style.css';

const cn = classnames.bind(style);

const Home = () => (
    <Layout>
        <Grid container>
            <Grid item xs={8}>
                main page
            </Grid>
            <Grid item xs={4}>
                <img className={cn('home__ava')} src="https://via.placeholder.com/728x600" alt=""/>
            </Grid>
        </Grid>
    </Layout>
);

export default Home;