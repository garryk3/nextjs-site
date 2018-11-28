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

        return { pageProps, dbData }
    }

    render () {
        const { Component, pageProps, dbData } = this.props;

        return (
            <Container>
                <FirebaseContext.Provider value={dbData}>
                    <Component {...pageProps} />
                </FirebaseContext.Provider>
            </Container>
        )
    }
}