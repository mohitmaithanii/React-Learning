import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
	/* const data = useLoaderData(); */

	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("https://api.github.com/users/mohitmaithanii")
			.then((Response) => Response.json())
			.then((data) => {
				console.log(data);
				setData(data);
			});
	}, []);

	return (
		<div className="m-4 text-2xl text-center text-white bg-gray-600">
			Github followers:{data.followers}
			<img src={data.avatar_url} alt="profile pic" width={200} />
		</div>
	);
}

export default Github;

/* export const githubInfoLoader = async () => {
	const response = await fetch("https://api.github.com/users/mohitmaithanii");
	return response.json;
};
 */
