import jsoPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = async () => {
	const response = await jsoPlaceholder.get("./posts");
	return {
		type: "FETCH_POSTS"
	};
};
