import React, { Fragment } from 'react';

import Typography from '@material-ui/core/Typography';

import Card from '../card';

import classnames from 'classnames/bind';
import style from './style.css';

const cn = classnames.bind(style);

const Sidebar = () => (
    <Fragment>
        <div className={cn('sidebar__heading')}>
            <Typography variant="h5">
                Последние публикации
            </Typography>
        </div>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </Fragment>
);

export default Sidebar;