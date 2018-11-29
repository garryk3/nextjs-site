import React, { Fragment, PureComponent } from 'react';

import Typography from '@material-ui/core/Typography';

import Card from '../components/card';
import ContentList from '../components/content-list';

class Articles extends PureComponent {

    constructor(props) {
        super(props);

        this.renderContent = this.getAllArticles();
    }

    getAllArticles = () => {
        const articles = this.props.initialState && this.props.initialState.articles;

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
                <Typography variant="h5">
                    По вашему запросу ничего не найдено!
                </Typography>
            )
        }
    };

    render() {
        return <ContentList
            heading='Статьи'
            sidebarImage='https://via.placeholder.com/300x600'
            description='Последние статьи описание'
            content={this.renderContent}
        />
    }
}

export default Articles;
