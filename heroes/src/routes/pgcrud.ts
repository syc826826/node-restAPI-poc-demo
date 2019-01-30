import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import { User } from "../models/users.model";

/**
 * / route
 *
 * @class PgcrudRoute
 */
export class PgcrudRoute extends BaseRoute {

    /**
     * Create the routes.
     *
     * @class IndexRoute
     * @method create
     * @static
     */
    public static create(router: Router) {
      //log
      console.log("[PgcrudRoute::create] Creating PgcrudRoute route.");
      //R
      router.get("/pghw/:id", (req: Request, res: Response, next: NextFunction) => {
        var userId = req.params.id;
        //console.log(userId);
        User.findOne({ where: { id: userId } }).then(user => {
          res.send(JSON.stringify(user));
        });
      });
      //C
      router.post("/pghw/adduser",(req: Request, res: Response, next: NextFunction) => {
        User.create({ firstName: req.body.firstName, lastName: req.body.lastName }).then(cr => {
          console.log(cr);
          res.send(JSON.stringify(cr));
        });
      });
      //U
      router.put("/pghw/updateuser",(req: Request, res: Response, next: NextFunction) => {
        User.update({ firstName: req.body.firstName, lastName: req.body.lastName }, { where: { id: req.body.id } }).then(ur => {
          console.log(ur);
          res.send(JSON.stringify(ur));
        });
      });
      //D
      router.delete("/pghw/delete/:id",(req: Request, res: Response, next: NextFunction) => {
        var userId = req.params.id;
        User.destroy({ where: { id: userId } }).then(rs=>{
          console.log(rs);
          res.send(JSON.stringify(rs));
        })
      });
    }

    /**
     * Constructor
     *
     * @class IndexRoute
     * @constructor
     */
    constructor() {
      super();
    }
  }