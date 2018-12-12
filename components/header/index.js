import React from 'react';
import Link from 'next/link';

import MenuIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import classnames from 'classnames/bind';
import style from './style.css';

const cn = classnames.bind(style);

const Header = () => {
    const menu = [{
        title: 'Статьи',
        href: '/articles'
    }, {
        title: 'Проекты',
        href: '/projects'
    }, {
        title: 'Галерея',
        href: '/galleries'
    }];

    return (
        <AppBar position="fixed">
            <Toolbar>
                <Link href="/">
                    <IconButton color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                </Link>
                {menu.map((item, index) => (
                    <Link href={item.href} key={`menu-${index}`}>
                        <div className={cn('header__link')}>
                            <Typography component="h6" color="inherit">
                                {item.title}
                            </Typography>
                        </div>
                    </Link>
                ))}
            </Toolbar>
        </AppBar>
    )
};

export default Header;