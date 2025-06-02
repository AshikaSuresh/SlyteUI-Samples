import { prop } from "@slyte/core";
import { Component } from "@slyte/component";

class BookYourRide extends Component {

	constructor() {
		super()
	}

	data() {
		return {
			contactName: prop("string", { "default": "", "mandatory": true }),
			email: prop("string", { "default": "", "mandatory": true }),
			phone: prop("number", { "mandatory": true }),
			pickupAddress: prop("string", { default: "" }),
			dropAddress: prop("string", { default: "" }),
			pickupTime: prop("string", { default: "12:00 AM" }),
			pickupDate: prop("string", { default: "04/16/2025" }),
			vendor: prop("string", { default: "" }),
			paymentMode: prop("string", { default: "" }),
			estimatedFees: prop("string", { default: "" }),
			splInstruction: prop("string", { default: "" }),
			instructionRecord: prop("string", { default: "" }),
			vehicleType: prop("string", { default: "" }),
			stepCheck: prop("number", { default: 0 }),
			url: prop("string", { "default": "https://media.istockphoto.com/id/1443383974/photo/parked-vehicle-in-concrete-garage.jpg?s=612x612&w=0&k=20&c=wXC3wHsSp7s07JRESVInax7OISqu2jcJTkrcZfhpr0w=" })
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
			nextMethod() {
				let step = document.querySelector(".bookRideStep");
				let stepIndex = step.getData("ltPropSelected");
				step.setData("ltPropSelected", stepIndex + 1);
				this.setData("stepCheck", stepIndex + 1);
				console.log(this.getData("stepCheck"))
			},

			previousMethod() {
				let step = document.querySelector(".bookRideStep");
				let stepIndex = step.getData("ltPropSelected");
				step.setData("ltPropSelected", stepIndex - 1);
				this.setData("stepCheck", stepIndex - 1);
			}


		};
	}

	static observers() {
		return {

		}
	}
}

export { BookYourRide }