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
        const latest = this.context && this.context.articles;

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
                    <Typography variant="h5">
                        Последние публикации
                    </Typography>
                </div>
                {this.renderLatest.map((article, index) => <Card key={`article-${index}`} content={article} />)}
            </Fragment>
        )
    }
}

export default Sidebar;