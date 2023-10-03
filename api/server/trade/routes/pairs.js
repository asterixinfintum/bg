import express from 'express';
import CTD from '../models/ctd';

const pairs = express();

pairs.get('/pairs', async (req, res) => {
    //http://localhost:8080/pairs?assetcategory=crypto&assetid=650868fdf9fd44e337e7ed7c
    const { assetid, assettype } = req.query;

    let ctds;

    if (assetid && assettype) {
        ctds = await CTD.find({ assetid, assettype });
    } else if (assettype) {
        ctds = await CTD.find({ assettype });
    } else {
        ctds = await CTD.find({});
    }

    res.status(200).send({ ctds });
});

export default pairs