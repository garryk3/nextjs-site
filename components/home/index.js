import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Layout from '../layout';

import classnames from 'classnames/bind';
import style from './style.css';

const cn = classnames.bind(style);

const Home = () => (
    <Layout>
        <Grid container spacing={16}>
            <Grid item xs={8}>
                <Typography variant="h4" gutterBottom>Heading</Typography>
                <Typography variant="body1" paragraph>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <img className={cn('home__ava')} src="https://via.placeholder.com/728x600" alt=""/>
            </Grid>
        </Grid>
    </Layout>
);

export default Home;