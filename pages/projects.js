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
        heading='Проекты'
        sidebarImage='https://via.placeholder.com/300x600'
        description='Последние проекты описание'
        content={renderContent}
    />
}
