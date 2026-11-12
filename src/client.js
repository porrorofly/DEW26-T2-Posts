import User from "./user.js";

class Client extends User {
    constructor(name,billing){
        super(name)
        this.billing=billing

    }
}

export { Client };
export default Client;
