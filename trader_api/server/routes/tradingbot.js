import express from 'express';

import Strategy from '../models/strategySchema';

import authenticateToken from '../utils/authenticateToken';

const botstrategy = express();

botstrategy.post('/createbot', authenticateToken, async (req, res) => {
    if (req.user && req.user.id) {
        const strategy = req.body
        const newStrategy = new Strategy(strategy);

        newStrategy.userId = req.user.id;

        newStrategy.save()
            .then(strategyItem => {
                res.status(200).json({ strategyItem })
            })
            .catch(err => {
                console.log(err);
            });
    }
});

botstrategy.get('/createbot', authenticateToken, async (req, res) => {
    if (req.user && req.user.id) {
        const userId = req.user.id;
        Strategy.find({ userId: userId }, (err, strategies) => {
            if (err) {
                console.error("Error fetching strategies by userId:", err);
                return;
            }
            
            res.status(200).json({ strategies });
        });
    }
}); 

botstrategy.put('/closebot', authenticateToken, async (req, res) => {
    if (req.user && req.user.id) {
        const strategyId = req.query.strategyId;

        if (strategyId) {
            Strategy.findById(strategyId, (err, strategy) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log(strategy);
                }
            });
        } else {
            res.send('No strategyId provided in query.');
        }
    
    }
});

export default botstrategy;