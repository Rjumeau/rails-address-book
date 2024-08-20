import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="contacts-list"
export default class extends Controller {
  static targets = ['contact']

  highlighted(event) {
    // Pour chacune des targets contacts,
    this.contactTargets.forEach((contact) => {
      contact.classList.remove('active')
    })
    // On retire la class active
    event.currentTarget.classList.add('active')
  }
}
