import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Layout from '../layout';

import classnames from 'classnames/bind';
import style from './style.css';

const cn = classnames.bind(style);

const ContentList = (props) => (
    <Layout>
        <Grid container spacing={16}>
            <Grid item xs={8}>
                <Typography variant="h4" gutterBottom>{props.heading}</Typography>
                <Typography variant="body1" paragraph>
                    {props.description}
                </Typography>
                {props.content}
            </Grid>
            <Grid item xs={4} className={cn('content-list__sidebar')}>
                <img className={cn('content-list__image')} src={props.sidebarImage} />
            </Grid>
        </Grid>
    </Layout>
);

ContentList.propTypes = {
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
    sidebarImage: PropTypes.string.isRequired
};

export default ContentList;