import express from 'express';
import { Client as IntercomClient, MessageType, RecipientType } from 'intercom-client';
import { Request } from '../models';

const router = express.Router();
const intercomClient = new IntercomClient(
    { tokenAuth: { token: process.env.INTERCOM_ACCESS_TOKEN! } }
);

router.post('/customer-service', async (req, res) => {
    const { category, comments, userId } = req.body;

    const request = new Request({ category, comments, userId });
    await request.save();

    await intercomClient.messages.create({
        messageType: MessageType.INAPP,
        body: comments,
        from: { type: RecipientType.USER, id: userId },
        to: { type: RecipientType.ADMIN, id: 'YOUR_ADMIN_ID' },
    });

    res.status(201).send(request);
});

router.get('/customer-service-requests', async (req, res) => {
    const requests = await Request.find();
    res.send(requests);
});

export default router;
