"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_session_1 = __importDefault(require("express-session"));
require("./models/User");
require("./models/Request");
require("./config/passport");
const auth_1 = __importDefault(require("./controller/auth"));
const customerService_1 = __importDefault(require("./controller/customerService"));
const dbConfig_1 = __importDefault(require("./database/dbConfig"));
const app = (0, express_1.default)();
(0, dbConfig_1.default)();
app.use(body_parser_1.default.json());
app.use((0, express_session_1.default)({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use('/auth', auth_1.default);
app.use('/api', customerService_1.default);
app.listen(process.env.PORT, () => console.log(`Server started on ${process.env.PORT}`));
