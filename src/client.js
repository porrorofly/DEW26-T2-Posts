import User from "./user.js";

class Client extends User {
    constructor(name, billing = 0) {
        super(name);
        this.billing = billing;
    }

    notify(post) {
        // Solo las publicaciones de pago tienen precio
        if (typeof post.price === "number") {
            this.billing = Math.round((this.billing + post.price) * 100) / 100;
        }
        return super.notify(post);
    }
}

export { Client };
export default Client;