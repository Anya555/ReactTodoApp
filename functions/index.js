const functions = require('firebase-functions');
const path = require('path');
const Busboy = require('busboy');
const cors = require('cors')({ origin: true });
const fs = require('fs');
const os = require('os');
const {Storage} = require('@google-cloud/storage');

const storage = new Storage({
    projectId: 'todolist-4b3b2',
    keyFilename: 'todolist-4b3b2-firebase-adminsdk-ddrft-74eb538396.json'
  });



exports.uploadFile = functions.https.onRequest((req, res) => {

    cors(req, res, () => {
        if (req.method !== 'POST') {
            return res.status(500).json({
                message: "Request not allowed"
            });
        }

        const busboy = new Busboy({ headers: req.headers })
        let uploadData = null;

        busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
            const filepath = path.join(os.tmpdir(), filename);
            uploadData = { file: filepath, type: mimetype }
            file.pipe(fs.createWriteStream(filepath))
        });

        busboy.on('finish', () => {
            const bucket = storage.bucket('todolist-4b3b2.appspot.com');
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