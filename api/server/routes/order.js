import express from 'express';

import Order from '../models/order';

import authenticateToken from '../utils/authenticateToken';

const order = express();

function deleteAllOrders() {
    return Order.remove({}, (err, orders) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Deleted ${orders.length} orders.`);
    });
}

//deleteAllOrders();

order.post('/createorder', authenticateToken, async (req, res) => {
    if (req.user && req.user.id) {
        const orderDetails = req.body;
        const userId = req.user.id;
        const newOrder = new Order(orderDetails);
        newOrder.ownerId = userId;

        newOrder.save()
            .then(orderitem => {
                res.status(201).json({ orderitem })
            })
            .catch(err => {
                console.log(err)
            })
    }
});

order.get('/getorders', authenticateToken, async (req, res) => {
    Order.find({})
        .then(orders => {
            res.status(200).json({ orders })
        })
        .catch(err => {
            console.log(err)
        })
});

export default order;