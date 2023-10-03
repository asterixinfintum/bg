import express from 'express';
import Order from '../models/order';
import AutoTrade from '../models/autotrade';
import ExecutedTrade from '../models/executedtrade';

import authenticateToken from '../../utils/authenticateToken';

const orders = express();

orders.post('/order', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        try {
            const userId = req.user._id;

            const order = new Order({
                ...req.body,
                userId,
            });

            await order.save();
            res.status(201).send(order);
        } catch (error) {
            console.log(error);
        }
    } else {
        res.status(404).send(error);
    }
});

orders.post('/order/market', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        try {
            const userId = req.user._id;

            const order = new Order({
                ...req.body,
                userId,
            });

            await order.save().then(odr => {
                const { price } = odr;

                if (odr.side === 'buy') {

                    odr.executebuy(price)
                        .then(order => {
                            res.status(201).send({ order });
                        })
                        .catch(error => {
                            console.log(error);
                            res.status(400).send(error);
                        })
                }

                if (odr.side === 'sell') {
                    odr.executesell(price)
                        .then((order) => {
                            console.log(order);
                            res.status(201).send({ order });
                        })
                        .catch(error => {
                            console.log(error);
                            res.status(400).send(error);
                        })
                }
            }).catch(error => {
                console.log(error)
            });
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    } else {
        res.status(404).send(error);
    }
});

orders.get('/orders', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        const userId = req.user._id;
        const userOrders = await Order.find({ userId });
        res.status(201).send({ orders: userOrders });
    } else {
        res.status(404).send(error);
    }
});

orders.get('/trades', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        const userId = req.user._id;
        const executedtrades = await ExecutedTrade.find({ userId });

        res.status(201).send({ executedtrades });
    }
});

orders.get('/autotrades', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        const userId = req.user._id;
        const autotrades = await AutoTrade.find({ userId });

        res.status(201).send({ autotrades });
    }
});

orders.post('/createautotrade', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        const userId = req.user._id;

        try {
            const autotrade = new AutoTrade({
                ...req.body,
                userId,
            });

            await autotrade.save()
                .then(autotd => {
                    autotd.triggerlockamount();
                })
                .catch(err => {
                    console.log(err);
                })
            res.status(201).send({ message: 'autotrade created' });
        } catch (error) {
            res.status(404).send(error);
        }
    } else {
        res.status(404).send(error);
    }
});

orders.get('/orderplayground', async (req, res) => {
    const id = '650f3a7b1c2829c7bdbf9bdf'
    const userOrder = await Order.find({ _id: id });
    const orderItem = userOrder[0];
    orderItem.executesell(0.01, 0.16)
        .then(({ walletasset, order, executedtrade }) => {
            res.status(201).send({ walletasset, order, executedtrade });
        })
        .catch(error => {
            console.log(error);
        })
});

orders.delete('/allorders', async (req, res) => {
    await deleteAllOrders();
})

async function deleteAllOrders() {
    try {
        await Order.deleteMany({});

        res.status(200).send({ message: 'All Orders have been deleted.' });
    } catch (error) {
        console.error('Error deleting Orders:', error);
    }
}

export default orders;