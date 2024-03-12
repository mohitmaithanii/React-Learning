import { useParams } from "react-router-dom";

function User() {
	const { userId } = useParams();
	return (
		<div className="flex justify-center p-4 text-2xl text-white bg-orange-600">
			User: {userId}
		</div>
	);
}

export default User;
