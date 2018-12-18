class Storage {
    constructor(app) {
        if(!app) {
            throw new Error(`Cant load storage, firebase is ${app}`);
        }

        console.log('app', app)

        this.storage = app.storage();
    }
}

export default Storage;