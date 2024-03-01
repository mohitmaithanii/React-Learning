/* Counter project using react hooks */

import { useState } from "react";
import "./App.css";

function App() {
	const [counter, setCounter] = useState(0);

	const addValue = () => {
		setCounter(counter + 1);
	};

	const removeValue = () => {
		// Check if count is greater than 0 before decrementing
		if (counter > 0) {
			setCounter(counter - 1);
		}
	};

	return (
		<>
			<h1>Chai aur React - Project</h1>
			<h2>Counter value : {counter}</h2>

			<button onClick={addValue}>Add value</button>
			<br />
			<br />
			<button onClick={removeValue}>remove value</button>
		</>
	);
}

export default App;
