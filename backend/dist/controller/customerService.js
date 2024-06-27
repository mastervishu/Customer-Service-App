"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const intercom_client_1 = require("intercom-client");
const models_1 = require("../models");
const router = express_1.default.Router();
const intercomClient = new intercom_client_1.Client({ tokenAuth: { token: process.env.INTERCOM_ACCESS_TOKEN } });
router.post('/customer-service', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category, comments, userId } = req.body;
    const request = new models_1.Request({ category, comments, userId });
    yield request.save();
    yield intercomClient.messages.create({
        messageType: intercom_client_1.MessageType.INAPP,
        body: comments,
        from: { type: intercom_client_1.RecipientType.USER, id: userId },
        to: { type: intercom_client_1.RecipientType.ADMIN, id: 'YOUR_ADMIN_ID' },
    });
    res.status(201).send(request);
}));
router.get('/customer-service-requests', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const requests = yield models_1.Request.find();
    res.send(requests);
}));
exports.default = router;
