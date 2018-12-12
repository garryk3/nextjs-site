import React, { Fragment, PureComponent } from 'react';
import PropTypes from "prop-types";

import Typography from '@material-ui/core/Typography';

import Card from '../components/card';
import ContentList from '../components/content-list';

class Galleries extends PureComponent {

    constructor(props) {
        super(props);

        this.renderContent = this.getAllGalleries();
    }

    static propTypes = {
        initialState: PropTypes.object
    };

    getAllGalleries = () => {
        const articles = this.props.initialState && this.props.initialState.galleries;

        if(Array.isArray(articles) && articles.length) {
            return (
                <Fragment>
                    {articles.map((article, index) => (
                        <Card
                            key={`article-${index}`}
                            image='https://via.placeholder.com/728x600'
                            title={article.name}
                            heading={article.name}
                            description={article.body}
                            href='/'
                        />
                    ))}
                </Fragment>
            );
        } else {
            return (
                <Typography component="h5">
                    По вашему запросу ничего не найдено!
                </Typography>
            )
        }
    };

    render() {
        return <ContentList
            heading='Галерея'
            sidebarImage='https://via.placeholder.com/300x600'
            description='Последние описание'
            content={this.renderContent}
        />
    }
}

export default Galleries;
