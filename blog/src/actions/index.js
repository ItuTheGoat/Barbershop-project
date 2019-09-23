import jsoPlaceholder from "../apis/jsonPlaceholder";
// This is how we use redux-thunk. We use it  with the async await function.
export const fetchPosts = () => async dispatch => {
	const response = await jsoPlaceholder.get("./posts");

	dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUsers = id => async dispatch => {
	const response = await jsoPlaceholder.get(`./users/${id}`);

	dispatch({ type: "FETCH_USERS", payload: response.data });
};
