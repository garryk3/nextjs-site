import * as firebase from "firebase";
import config from '../../config/config';

class Firebase {
    constructor() {
        if(!firebase.apps.length) {
            console.log('init', firebase.apps.length)
            firebase.initializeApp(config.firebase)
        } else {
            console.log('no init', firebase.apps)
        }
    }

    get app() {
        return firebase.app()
    }
}

export default Firebase;