import { useContext } from "react";
import userContext from "../context/UserContext";

function Profile() {
	const { user } = useContext(userContext);

	if (!user)
		return (
			<div className="flex justify-center p-2 m-10 text-2xl font-semibold bg-green-400 rounded-lg">
				Please Login
			</div>
		);

	return (
		<div className="flex justify-center p-2 m-10 text-2xl font-semibold bg-green-400 rounded-lg">
			Welcome {user.username}
		</div>
	);
}

export default Profile;
