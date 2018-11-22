import React, { Fragment } from 'react';

import Card from '../components/card';
import ContentList from '../components/content-list';

export default () => {
    const renderContent = (
        <Fragment>
            <Card />
            <Card />
            <Card />
        </Fragment>
    );

    return <ContentList
        heading='Статьи'
        sidebarImage='https://via.placeholder.com/300x600'
        description='Последние статьи описание'
        content={renderContent}
    />
}
