// Extend the HTMLElement class to create the web component
class NavItem extends HTMLElement {

	/**
	 * The class constructor object
	 */
	constructor () {

		// Always call super first in constructor
		super();

        this.innerHTML = `<li>nav-item</li>`;

		// console.log('Constructed', this);
	}

	/**
	 * Runs each time the element is appended to or moved in the DOM
	 */
	connectedCallback () {
		// console.log('connected!', this);
	}

	/**
	 * Runs when the element is removed from the DOM
	 */
	disconnectedCallback () {
		// console.log('disconnected', this);
	}

}

// Define the new web component
if ('customElements' in window) {
	customElements.define('nav-item', NavItem);
}
