import * as firebase from "firebase";
import config from '../../config/config';

class Firebase {
    constructor() {
        this.app = null;

        if(!firebase.apps.length) {
            this.app = firebase.initializeApp(config.firebase)
        } else {
            this.app = firebase.app();
        }

        this.database = this.app && this.app.database();
    }

    async readDatabaseRefOnce() {
        try {
            let data = await this.database.ref('/content').once('value');
            let value = data.val();

            if(value) {
                return value;
            } else {
                console.log(`db value of key ${name} is ${value}`)
            }
        } catch (e) {
            console.error(e);
        }
    }
}

export default Firebase;