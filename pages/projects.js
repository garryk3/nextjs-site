import React, { Fragment, PureComponent } from 'react';

import Typography from '@material-ui/core/Typography';

import Card from '../components/card';
import ContentList from '../components/content-list';

class Projects extends PureComponent {

    constructor(props) {
        super(props);

        this.renderContent = this.getAllProjects();
    }

    getAllProjects = () => {
        const articles = this.props.initialState && this.props.initialState.projects;

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
            heading='Проекты'
            sidebarImage='https://via.placeholder.com/300x600'
            description='Последние проекты описание'
            content={this.renderContent}
        />
    }
}

export default Projects;
