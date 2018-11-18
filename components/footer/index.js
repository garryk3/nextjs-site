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
        <AppBar position="static">
            <Toolbar>
                <Link>
                    <a className={cn('footer__copyright')} target="_blank" href="https://github.com/garryk3">
                        <Typography variant="caption" color="inherit">© garryk3 2018</Typography>
                    </a>
                </Link>
            </Toolbar>
        </AppBar>
    )
};

export default Footer;