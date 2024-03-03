import { useState, useCallback, useEffect, useRef } from "react";

function App() {
	//* useState hook:
	const [length, setLength] = useState(8);
	const [numberAllowed, setNumberAllowed] = useState(false);
	const [charAllowed, setCharAllowed] = useState(false);
	const [password, setPassword] = useState("");

	//* useRef hook:
	const passwordRef = useRef(null);

	//* useCallback hook:
	const passwordGenerator = useCallback(() => {
		let pass = "";
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

		if (numberAllowed) str += "0123456789";
		if (charAllowed) str += "~!@#$%^&*";

		// Generate the password by randomly selecting characters from the string.
		for (let i = 1; i <= length; i++) {
			let char = Math.floor(Math.random() * str.length + 1);
			pass += str.charAt(char);
		}
		setPassword(pass);
	}, [length, numberAllowed, charAllowed, setPassword]);

	// Copy password to clipboard:
	const copyPasswordToClipboard = useCallback(() => {
		passwordRef.current?.select();
		passwordRef.current?.setSelectionRange(0, 12);
		window.navigator.clipboard.writeText(password);
	}, [password]);

	//* useEffect hook:
	useEffect(() => {
		passwordGenerator();
	}, [length, numberAllowed, charAllowed, passwordGenerator]);

	return (
		<>
			<div className="container w-full max-w-md px-4 py-4 mx-auto my-8 text-white bg-gray-800 rounded-lg shadow-2xl">
				<h1 className="my-3 text-2xl text-center">Password Generator</h1>
				<div className="flex mb-4 overflow-hidden rounded-lg">
					<input
						className="w-full px-3 py-1 text-black border rounded-l-lg"
						type="text"
						value={password}
						placeholder="password"
						readOnly
						ref={passwordRef}
					/>
					<button
						onClick={copyPasswordToClipboard}
						className="px-3 text-white bg-orange-500 outline-none py-0.5 shrink-0"
					>
						Copy
					</button>
				</div>
				<div className="flex flex-col text-sm sm:flex-row gap-x-2 sm:gap-x-4">
					<div className="flex items-center mb-2 gap-x-1 sm:mb-0">
						<input
							className="cursor-pointer"
							type="range"
							min={8}
							max={12}
							value={length}
							onChange={(e) => {
								setLength(e.target.value);
							}}
						/>
						<label>Length: {length}</label>
					</div>
					<div className="flex items-center mb-2 gap-x-1 sm:mb-0">
						<input
							type="checkbox"
							defaultChecked={numberAllowed}
							id="numberInput"
							onChange={() => {
								setNumberAllowed((prev) => !prev);
							}}
						/>
						<label htmlFor="numberInput">Numbers</label>
					</div>
					<div className="flex items-center mb-2 gap-x-1 sm:mb-0">
						<input
							type="checkbox"
							defaultChecked={charAllowed}
							id="characterInput"
							onChange={() => {
								setCharAllowed((prev) => !prev);
							}}
						/>
						<label htmlFor="characterInput">Character</label>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
