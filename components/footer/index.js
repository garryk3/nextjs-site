import React from 'react';
import Link from 'next/link';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import classnames from 'classnames/bind';
import style from './style.css';

const cn = classnames.bind(style);

const Footer = () => {
    return (
        <AppBar position="static" className={cn('footer')}>
            <Toolbar>
                <Link href="https://github.com/garryk3">
                    <a className={cn('footer__copyright')} target="_blank">
                        <Typography component="caption" color="inherit">© garryk3 2018</Typography>
                    </a>
                </Link>
            </Toolbar>
        </AppBar>
    )
};

export default Footer;