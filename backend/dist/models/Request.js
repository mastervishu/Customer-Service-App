"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const requestSchema = new mongoose_1.Schema({
    category: String,
    comments: String,
    userId: mongoose_1.Schema.Types.ObjectId,
});
exports.default = (0, mongoose_1.model)('Request', requestSchema);
