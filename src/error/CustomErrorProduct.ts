import { BaseError } from "./BaseError";

export class invalidParams extends BaseError{
    constructor(){
        super("Missing params id field to fill")
    }
}

export class invalidProduct extends BaseError{
    constructor(){
        super("non existent product")
    }
}