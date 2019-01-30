import { Request, Response } from "express";
export declare class BaseRoute {
    protected title: string;
    private scripts;
    constructor();
    addScript(src: string): BaseRoute;
    render(req: Request, res: Response, view: string, options?: Object): void;
}
