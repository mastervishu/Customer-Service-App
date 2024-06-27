import 'dotenv/config';
import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';
import session from 'express-session';

import './models/User';
import './models/Request';
import './config/passport';

import authRoutes from './controller/auth';
import customerServiceRoutes from './controller/customerService';
import dbConnect from './database/dbConfig';

const app = express();

dbConnect()

app.use(bodyParser.json());
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
app.use('/api', customerServiceRoutes);

app.listen(process.env.PORT, () => console.log(`Server started on ${process.env.PORT}`));