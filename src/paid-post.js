
import Post from "./post.js";
import Client from "./client.js";

class PaidPost extends Post {
    constructor(name, price) {
        super(name);
        this.price = price;
    }

    attach(client) {
        if (client instanceof Client) super.attach(client);
    }
}

export { PaidPost };
export default PaidPost;