import {singleton} from "tsyringe"

@singleton()
export default class Validate {


    public userName (name: string): boolean {
        if(!name){
            return  false
        }

        return name.length > 3
    }

    public password (pass: string): boolean {
        if(!pass){
            return  false
        }

        return pass.length > 5
    }
}