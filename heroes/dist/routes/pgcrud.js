"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
const users_model_1 = require("../models/users.model");
class PgcrudRoute extends route_1.BaseRoute {
    static create(router) {
        console.log("[PgcrudRoute::create] Creating PgcrudRoute route.");
        router.get("/pghw/:id", (req, res, next) => {
            var userId = req.params.id;
            users_model_1.User.findOne({ where: { id: userId } }).then(user => {
                res.send(JSON.stringify(user));
            });
        });
        router.post("/pghw/adduser", (req, res, next) => {
            users_model_1.User.create({ firstName: req.body.firstName, lastName: req.body.lastName }).then(cr => {
                console.log(cr);
                res.send(JSON.stringify(cr));
            });
        });
        router.put("/pghw/updateuser", (req, res, next) => {
            users_model_1.User.update({ firstName: req.body.firstName, lastName: req.body.lastName }, { where: { id: req.body.id } }).then(ur => {
                console.log(ur);
                res.send(JSON.stringify(ur));
            });
        });
        router.delete("/pghw/delete/:id", (req, res, next) => {
            var userId = req.params.id;
            users_model_1.User.destroy({ where: { id: userId } }).then(rs => {
                console.log(rs);
                res.send(JSON.stringify(rs));
            });
        });
    }
    constructor() {
        super();
    }
}
exports.PgcrudRoute = PgcrudRoute;
