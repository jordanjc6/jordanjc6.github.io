// Extend the HTMLElement class to create the web component
class NavItem extends HTMLElement {

	/**
	 * The class constructor object
	 */
	constructor () {

		// Always call super first in constructor
		super();

        // Attach a shadow DOM
        this.attachShadow({ mode: 'open' });

        this.innerHTML = `<li><a href="#">Home</a></li>`;

		console.log('Constructed', this);
	}

	/**
	 * Runs each time the element is appended to or moved in the DOM
	 */
	connectedCallback () {
		console.log('connected!', this);
	}

	/**
	 * Runs when the element is removed from the DOM
	 */
	disconnectedCallback () {
		console.log('disconnected', this);
	}

}

// Define the new web component
if ('customElements' in window) {
	customElements.define('nav-item', NavItem);
}
