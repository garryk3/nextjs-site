class RealtimeDB {
    constructor(app) {
        if(!app) {
            throw new Error(`Cant load db, firebase is ${app}`);
        }

        this.contentPath = '/content';

        this.db = app.database();
    }

    async readDatabaseRefOnce() {
        try {
            let data = await this.db.ref().once('value');
            let value = data.val();

            if(value) {
                return value;
            } else {
                console.log(`db value is ${value}`)
            }
        } catch (e) {
            console.error(e);
        }
    }

    async readDBContent() {
        try {
            let data = await this.db.ref(this.contentPath).once('value');
            let value = data.val();

            if(value) {
                return value;
            } else {
                console.log(`db value is ${value}`)
            }
        } catch (e) {
            console.error(e);
        }
    }

    saveContentToDB(type, content) {
        try {
            const updates = {};
            let postKey = content.key;

            if(!content.key) {

                postKey = this.db.ref(this.contentPath).child(type).push().key
            }


            updates[type + postKey] = {
                ...content
            };

            return this.db.ref(this.contentPath + type).update(updates);
        } catch (e) {
            console.error(e);
        }
    }

    removeContentFromDB(type, key) {
        try {
            if(type && key) {
                this.db.ref(type).child(type + key).remove()
            } else {
                console.warn(`cant find data, key is ${key}, type is ${type}`)
            }
        } catch(e) {
            console.error(e);
        }
    }
}

export default  RealtimeDB;