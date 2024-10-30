// Extend the HTMLElement class to create the web component
class TopNav extends HTMLElement {

	/**
	 * The class constructor object
	 */
	constructor () {

		// Always call super first in constructor
		super();

		// Attach a shadow DOM (to encapsulate, styles would need to be inside innerhtml between style tags)
        // this.attachShadow({ mode: 'open' });

		// this.shadowRoot.innerHTML
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
                <li class="jor">Home</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </section>`;

		// Add a click event listener
		// this.shadowRoot.querySelector
        this.querySelector('.jor').addEventListener('click', () => {
            console.log('Clicked!');
        });

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
	customElements.define('top-nav', TopNav);
}
