"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
	return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// @ts-ignore
const users_1 = require("./users");
const app = (0, express_1.default)();
console.log(users_1.users);
// @ts-ignore
app.get('/', (req, res) => {
	res.end();
});
app.listen(5500, () => {
	console.log('Server has started🚀🚀🚀');
});
//# sourceMappingURL=app.js.map