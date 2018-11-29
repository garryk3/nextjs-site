import React from 'react';
import App, { Container } from 'next/app';

import Firebase, { FirebaseContext } from '../components/firebase';

export default class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        const dbData = await new Firebase().readDatabaseRefOnce('/content');
        const { articles, galleries, projects } = dbData;
        const initialState = {
            articles,
            galleries,
            projects
        };

        return { pageProps, initialState }
    }

    render () {
        const { Component, pageProps, initialState } = this.props;

        return (
            <Container>
                <FirebaseContext.Provider value={initialState}>
                    <Component {...pageProps} initialState={initialState} />
                </FirebaseContext.Provider>
            </Container>
        )
    }
}