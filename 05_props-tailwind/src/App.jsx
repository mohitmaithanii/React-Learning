import Card from "./components/Card";
function App() {
	/* 	let myObj = {
		username: "Mohit",
		age: 21,
	};

  let newArr = [1,2,3]
 */
	return (
		<>
			<h1 className="bg-green-400 text-black p-4 rounded-xl m-10 flex justify-center">
				React + Tailwind
			</h1>
			{/* <Card name="mohit" someObj={myObj} arr={newArr}/> */}
			<Card username="Amit" btnText="visit me" />
			<Card username="Mohit" btnText="visit me" />
		</>
	);
}

export default App;
