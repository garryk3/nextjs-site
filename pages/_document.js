import Document, { Head, Main, NextScript } from 'next/document';
import Firebase, { FirebaseContext } from '../components/firebase';


export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps }
    }

    render() {
        const firebaseInstance = new Firebase();
        console.log('--====!', firebaseInstance)

        return (
            <html>
                <Head />
                <body>
                    <Main />
                    <FirebaseContext.Provider value={firebaseInstance}>
                        <NextScript />
                    </FirebaseContext.Provider>
                </body>
            </html>
        )
    }
}