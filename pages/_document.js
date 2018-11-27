import Document, { Head, Main, NextScript } from 'next/document';
import Firebase, { FirebaseContext } from '../components/firebase';


export default class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        const dbData = await new Firebase().readDatabaseRefOnce('/title');

        return { ...initialProps, dbData }
    }



    render() {
        console.log('this', this.props.dbData)
        return (
            <html>
                <Head />
                <body>
                    <Main />
                    <FirebaseContext.Provider value={this.props.dbData}>
                        <NextScript />
                    </FirebaseContext.Provider>
                </body>
            </html>
        )
    }
}