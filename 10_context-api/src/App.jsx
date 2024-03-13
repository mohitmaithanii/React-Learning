import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
	return (
		<UserContextProvider>
			<h1 className="flex justify-center p-2 m-10 text-2xl font-semibold bg-orange-500 rounded-lg">
				react - context API
			</h1>
			<Login />
			<Profile />
		</UserContextProvider>
	);
}

export default App;
