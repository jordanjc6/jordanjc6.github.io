// Extend the HTMLElement class to create the web component
class TopNav extends HTMLElement {

	/**
	 * The class constructor object
	 */
	constructor () {

		// Always call super first in constructor
		super();

		console.log('Constructed', this);

        this.innerHTML = `
        <section class="top-nav">
            <div>
				Logo Here
            </div>
            <input id="menu-toggle" type="checkbox" />
            <label class='menu-button-container' for="menu-toggle">
            <div class='menu-button'></div>
            </label>
            <ul class="menu">
                <li>Home</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </section>`;

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
	customElements.define('top-nav', TopNav);
}
