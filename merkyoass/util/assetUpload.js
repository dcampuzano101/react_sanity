import { client } from '../../src/sanityClient.js';
// import { basename } from 'path';
// import { createReadStream } from 'fs';
// const fs = require('fs');
import fs, { createReadStream } from 'fs';
import { basename } from 'path';
// const path = require('path');
// import { path } from 'path';
const images = '../images/';

const fileNames = fs.readdirSync(images);

// console.log(fileNames);

// const client = sanityClient({
//   projectId: 'myProjectId',
//   dataset: 'myDatasetName',
//   apiVersion: '2021-08-29',
//   token: 'myToken',
// // });

// const filePath = '/Users/mike/images/';

const uploadImageAssets = (fileNames) => {
  //fileNames = []

  fileNames.forEach((fileName) => {
    const filePath = `../images/${fileName}`;
    try {
      client.assets
        .upload('image', createReadStream(filePath), {
          filename: basename(filePath),
        })
        .then((imageAsset) => {
          console.log(imageAsset);
          return client;
        })
        .then(() => {
          console.log('Images uploaded!');
        });
    } catch (err) {
      console.log(err);
    }
  });
};

uploadImageAssets(fileNames);

// client.assets
//   .upload('image', createReadStream(filePath), {
//     filename: basename(filePath),
//   })
//   .then((imageAsset) => {
//     // Here you can decide what to do with the returned asset document.
//     // If you want to set a specific asset field you can to the following:
//     return client
//       .patch('some-document-id')
//       .set({
//         theImageField: {
//           _type: 'image',
//           asset: {
//             _type: 'reference',
//             _ref: imageAsset._id,
//           },
//         },
//       })
//       .commit();
//   })
//   .then(() => {
//     console.log('Done!');
//   });

// // {"_id": "post_23", "_type": "post", "postTitle": "huck_n_fin", "mainImage": {"_type": "image", "_sanityAsset": "image@file:///c:/users/david_campuzano/Documents/current_projects/next_sanity/merkyoass/post_pics/zeus_river.JPG"}}
