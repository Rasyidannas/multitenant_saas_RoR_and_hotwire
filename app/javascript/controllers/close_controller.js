import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="close"
export default class extends Controller {
  // connect() {
  //   console.log("hello, stimulus");
  // }

  hide() {
    console.log("hide");
  }
}
