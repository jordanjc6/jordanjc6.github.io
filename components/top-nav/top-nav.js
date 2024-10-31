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

		// Use the attribute value to update innerHTML
        const text = this.getAttribute('test-attr') || 'Logo Here';  // Fallback to default if not provided
		// this.shadowRoot.innerHTML
        this.innerHTML = `
		<section class="top-nav">
            <div>
				${text}
            </div>
            <input id="menu-toggle" type="checkbox" />
            <label class='menu-button-container' for="menu-toggle">
            <div class='menu-button'></div>
            </label>
            <ul class="menu">
                <li class="nav-item">Home</li>
                <li class="nav-item">Projects</li>
                <li class="nav-item">Contact</li>
            </ul>
        </section>`;

		// Add a click event listener
		// this.shadowRoot.querySelector
		let navItems = document.querySelectorAll('.nav-item');
		for (let i = 0; i < navItems.length; i++) {
			navItems[i].addEventListener('click', () => {
				console.log(`Clicked ${navItems[i].textContent}`);
				
				// route to page
				const route = navItems[i].textContent.toLowerCase();  // Extract route based on text
				renderPage(route);
			});
		}

		console.log('Constructed', this);
	}

	/**
	 * Runs each time the element is appended to or moved in the DOM
	 */
	connectedCallback () {
		console.log('connected!', this);
		renderPage('home');
	}

	/**
	 * Runs when the element is removed from the DOM
	 */
	disconnectedCallback () {
		console.log('disconnected', this);
	}

	 /**
     * Observed attributes
     */
	 static get observedAttributes() {
        return ['test-attr'];  // Add any other attributes you want to observe here
    }

}

// Define the new web component
if ('customElements' in window) {
	customElements.define('top-nav', TopNav);
}

// Function to render content based on the route
async function renderPage(route) {
	const app = document.querySelector('#app');
	let filePath;
	
	switch (route) {
		case 'home':
			filePath = 'pages/home.html';
			break;
		case 'projects':
			filePath = 'pages/projects.html';
			break;
		case 'contact':
			filePath = 'pages/contact.html';
			break;
		default:
			app.innerHTML = 'Page not found!';
			return;
	}

	// Fetch and load the HTML file
	try {
		const response = await fetch(filePath);
		if (!response.ok) throw new Error('Network response was not ok');
		const htmlContent = await response.text();
		app.innerHTML = htmlContent;
	} catch (error) {
		console.error('Error loading page:', error);
		app.innerHTML = 'Error loading page content!';
	}
}
