import { useState, useContext } from "react";
import userContext from "../context/UserContext";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { setUser } = useContext(userContext);

	const handelSubmit = (e) => {
		e.preventDefault();
		setUser({ username, password });
	};

	return (
		<div className="flex flex-col items-center justify-center m-10 bg-white rounded-lg shadow-xl h-60">
			<h2 className="m-2 text-xl font-bold">Login</h2>
			<input
				className="m-2 border-2"
				type="text"
				placeholder="username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				className="m-2 border-2"
				type="password"
				placeholder="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button
				className="px-4 py-1 bg-orange-500 rounded-xl"
				onClick={handelSubmit}
			>
				Submit
			</button>
		</div>
	);
}

export default Login;
