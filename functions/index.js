const functions = require('firebase-functions');
const path = require('path');
const Busboy = require('busboy');
const cors = require('cors');
const fs = require('fs');
const os = require('os');
const { Storage } = require('@google-cloud/storage');

const storage = new Storage({
    projectId: 'todolist-4b3b2',
    keyFilename: 'todolist-4b3b2-firebase-adminsdk-ddrft-74eb538396.json'
});


exports.uploadFile = functions.https.onRequest((req, res) => {
    res.set('Access-Control-Allow-Origin', '*');

    if (req.method === 'OPTIONS') {
        // Send response to OPTIONS requests
        res.set('Access-Control-Allow-Methods', 'GET', 'POST');
        res.set('Access-Control-Allow-Headers', 'Content-Type');
        res.set('Access-Control-Max-Age', '3600');
        res.status(204).send('');
    } else {
        res.send('Hello World!');
    }

    cors(req, res, () => {

        const busboy = new Busboy({ headers: req.headers })
        let uploadData = null
    
        busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
          const filepath = path.join(os.tmpdir(), filename)
          uploadData = { file: filepath, type: mimetype }
          file.pipe(fs.createWriteStream(filepath))
        })

        busboy.on('finish', () => {
            const bucket = storage.bucket('todolist-4b3b2.appspot.com')
            bucket.upload(uploadData.file, {
                uploadType: 'media',
                metadata: {
                    metadata: {
                        contentType: uploadData.type
                    },
                }, 
            }).then(() => {
                res.status(200).json({
                    message: 'Success'
                })
            }).catch(err => {
                res.status(500).json({
                    error: err,
                })
            })
        })
        busboy.end(req.rawBody)
    })

})