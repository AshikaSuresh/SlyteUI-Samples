import { prop } from "@slyte/core";
import { Component } from "@slyte/component";

class TicketsOfContact extends Component {

    constructor() {
        super()
    }

    data() {
        return {
            context: prop("object", {}),
            contact_email : prop("string",{"default" : "","mandatory" : true})
        };
    }

    static methods() {
        return {
            sampleMethod() {
            }
        }
    }

    static helpers() {
        return {
            sampleHelper() {
            }
        }
    }

    static actions() {
        return {

        }
    }

    static observers() {
        return {

        }
    }
}

export { TicketsOfContact }
