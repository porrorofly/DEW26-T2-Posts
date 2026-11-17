import User from "./user.js";

class Post {
    #number = 0;
    #subscribers = [];

    constructor(name) {
        this.name = name;
    }

    get summary() {
        return `${this.name} publication number ${this.#number}`;
    }

    getSubscribers() {
        return this.#subscribers.map((s) => s.name).join(",");
    }


    getSuscribers() {
        return this.getSubscribers();
    }

    attach(user) {
        if (user instanceof User && !this.#subscribers.includes(user)) {
            this.#subscribers.push(user);
        }
    }

    detach(user) {
        const i = this.#subscribers.indexOf(user);
        if (i !== -1) this.#subscribers.splice(i, 1);
    }

    publish() {
        this.#number++;
        return this.#subscribers.map((s) => s.notify(this));
    }
}

export { Post };
export default Post;