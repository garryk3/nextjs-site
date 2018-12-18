import React from 'react';
import App, { Container } from 'next/app';

import Firebase, { FirebaseContext } from '../components/firebase';

const firebase = new Firebase();

export default class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        const dbData = await firebase.database.readDatabaseRefOnce();
        const { articles, galleries, projects } = dbData;
        const initialState = {
            articles: articles && Object.values(articles),
            galleries: galleries && Object.values(galleries),
            projects: projects && Object.values(projects)
        };

        return { pageProps, initialState }
    }

    render () {
        const { Component, pageProps, initialState } = this.props;
        const contextValue = {
            initialState,
            firebase
        };

        return (
            <Container>
                <FirebaseContext.Provider value={contextValue}>
                    <Component {...pageProps} initialState={initialState} />
                </FirebaseContext.Provider>
            </Container>
        )
    }
}