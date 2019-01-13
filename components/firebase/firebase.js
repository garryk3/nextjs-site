import * as firebase from "firebase";

import RealtimeDB from './realtime-db';

import config from '../../config/config';

class Firebase {
    constructor() {
        this.app = null;

        if(!firebase.apps.length) {
            this.app = firebase.initializeApp(config.firebase)
        } else {
            this.app = firebase.app();
        }
        
        this.database = new RealtimeDB(this.app);
    }
}

export default Firebase;