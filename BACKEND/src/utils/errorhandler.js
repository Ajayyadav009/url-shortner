import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

export const errorHandler = function(err, req, res, next){
if(err instanceof AppError){
    return res.status(err.statuCode).json({
        success: false,
        message: err.message,
    });
}
console.log(err);
res.status(500).json({
    success: false,
    message: "Internal Server Error",
});
};