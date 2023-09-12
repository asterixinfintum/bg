if (process.env.NODE_ENV !== 'production') {
  require("dotenv").config();
}

import "regenerator-runtime/runtime.js";
import express from "express";
import http from "http";
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';

import mongoose from 'mongoose';

import fileupload from './routes/fileupload.js';
import imageupload from './routes/imageupload.js';
import fileretrieve from './routes/fileretrieve.js';
import videoupload from './routes/videoupload.js'

const app = express();

app.use(express.static('public'));
app.use('/', express.static('public/ui'));
app.use(express.static('uploads'));
app.use(express.static('videos-directory'));
app.use(express.urlencoded({
    extended: false
}));
app.use(cors());
  
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(fileupload);
app.use(imageupload);
app.use(fileretrieve);
app.use(videoupload);

const PORT = process.env.PORT || 8081;
const server = http.createServer(app);

mongoose.connect(`${process.env.DB}`, {
  //mongodb://db:27017/verificationapi =====> production
  //mongodb://127.0.0.1:27017/verificationapi ===> development

    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(() => {
    console.log('connected to database');

    server.listen(PORT, async (error) => {
      if (error) {
        return error;
      }
    
      return console.log(`server started on port here now ${PORT}`);
    });
});