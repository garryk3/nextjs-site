import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const HeadCustom = (props) => (
    <div>
        <Head>
            <title>{props.title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
    </div>
);

HeadCustom.propTypes = {
    title: PropTypes.string
};

HeadCustom.defaultProps = {
    title: 'Мой блог'
};

export default HeadCustom;