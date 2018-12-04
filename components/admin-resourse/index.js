import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Head from '../head';


import classnames from 'classnames/bind';
import style from './style.css';
import Header from "../header";
import AdminSidebar from "./admin-sidebar";
import AdminMain from "./admin-main";
import Footer from "../footer";

const cn = classnames.bind(style);

class AdminResourse extends PureComponent {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        content: PropTypes.object
    };

    render() {
        return (
            <Fragment>
                <Head/>
                <Grid
                    container
                    spacing={16}
                    className={cn('admin__container')}
                >
                    <Grid item xs={12}>
                        <Header/>
                    </Grid>
                    <Grid container className={cn('admin__container-inner')}>
                        <Grid item xs={3}>
                            <AdminSidebar content={this.props.content} />
                        </Grid>
                        <Grid item xs={9}>
                            <AdminMain />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={cn('admin__footer')}>
                        <Footer/>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
}

export default AdminResourse;