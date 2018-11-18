import React from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import classnames from 'classnames/bind';
import style from './style.css';

const cn = classnames.bind(style);

const Header = () => (
    <AppBar position="sticky">
        <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
                News
            </Typography>
            <div className={cn('header__content-right')}>
                <Button color="inherit" className={cn('header__btn-auth')}>Login</Button>
            </div>
        </Toolbar>
    </AppBar>
);

export default Header;