const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
    'sk_test_51KaYFbDY3X0pV9CNDucGQnMCngqEB6ZDURQqDSAy2yUMLvI52U102sjkfNn3QdOcYHUYZ63dEi70A5hKY1wfEZgw00qHL25Fhl'
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Welcome to Test EndPoint...');
});

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    })

    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

exports.api = functions.https.onRequest(app);