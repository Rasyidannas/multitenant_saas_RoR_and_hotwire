import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = ["profileCard"];

  conncts() {
    console.log("toggle_controller.js connected")
  }

  toggleProfileCard() {
    this.profileCardTarget.classList.toggle("hidden");
  }
}
