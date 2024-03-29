function customRender(reactElement, container) {
	const domElement = document.createElement(reactElement.type);
	domElement.innerHTML = reactElement.children;

	/* domElement.setAttribute("href", reactElement.props.href);
	domElement.setAttribute("target", reactElement.props.target);
    */

	// better code:
	for (const prop in reactElement.props) {
		if (prop === "children") continue;
		domElement.setAttribute(prop, reactElement.props[prop]);
	}
	container.appendChild(domElement);
}

const reactElement = {
	type: "a",
	props: {
		href: "https://google.com",
		target: "_blank",
	},
	children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);

// In react :

/* const anotherElement = (
	<a
		href="https://google.com"
		target="_
  "
	>
		Visit Google
	</a>
);

const anotherUer = "chai aur react";

const reactElement = React.createElement(
	"a",
	{ href: "http://www.google.com", target: "_blank" },
	"Go to Google",
	anotherUser
);

ReactDOM.createRoot(document.getElementById("root")).render(
	/* anotherElement,
	reactElement, 
	<App />
	);
*/
