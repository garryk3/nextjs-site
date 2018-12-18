import * as firebase from "firebase";

import RealtimeDB from './realtime-db';
import Storage from './storage';

import config from '../../config/config';

const contentRef = '/content';

class Firebase {
    constructor() {
        this.app = null;

        if(!firebase.apps.length) {
            this.app = firebase.initializeApp(config.firebase)
        } else {
            this.app = firebase.app();
        }
        
        this.database = new RealtimeDB(this.app);
        //this.storage = new Storage(this.app);
    }
}

export default Firebase;