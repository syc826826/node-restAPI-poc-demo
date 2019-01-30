import * as express from "express";
export declare class Server {
    app: express.Application;
    static bootstrap(): Server;
    constructor();
    api(): void;
    config(): void;
    private routes;
}
