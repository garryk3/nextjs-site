import React, { Fragment, PureComponent } from 'react';

import Typography from '@material-ui/core/Typography';

import Card from '../card';
import { FirebaseContext } from '../firebase';


import classnames from 'classnames/bind';
import style from './style.css';

const cn = classnames.bind(style);

class Sidebar extends PureComponent {

    static contextType = FirebaseContext;

    get renderLatest() {
        const latest = this.context.initialState && this.context.initialState.articles;

        if(Array.isArray(latest)) {
            return latest.slice(0, 3);
        } else {
            return [];
        }
    }

    render() {
        return (
            <Fragment>
                <div className={cn('sidebar__heading')}>
                    <Typography component="h5">
                        Последние публикации
                    </Typography>
                </div>
                {this.renderLatest.map((article, index) => (
                    <Card
                        key={`latest-${index}`}
                        image='https://via.placeholder.com/728x600'
                        title={article.title}
                        heading={article.heading}
                        description={article.body}
                        href='/'
                    />
                ))}
            </Fragment>
        )
    }
}

export default Sidebar;