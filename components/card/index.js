import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import classnames from 'classnames/bind';
import style from './style.css';

const cn = classnames.bind(style);

const CardItem = (props) => (
    <Card className={cn('card')}>
        <CardActionArea>
            <CardMedia
                image={props.image}
                title={props.title}
                className={cn('card__img')}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.heading}
                </Typography>
                <Typography component="p">
                    {props.description}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
                <Link href={props.href}>
                    <a href="">Подробнее...</a>
                </Link>
            </Button>
        </CardActions>
    </Card>
);

CardItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
};

export default CardItem;

