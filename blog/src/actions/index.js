import _ from "lodash";
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

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	//Need to dispatch the original action creators when nesting action creators
	// the await keyword will ensure we wait for the api request to get handled
	await dispatch(fetchPosts());

	// const userIds = _.uniq(_.map(getState().posts, "userId"));
	// userIds.forEach(id => dispatch(fetchUsers(id)));

	// Lodash chain method to simplify
	_.chain(getState().posts)
		.map("userId")
		.uniq()
		.forEach(id => dispatch(fetchUsers(id)))
		.value();
};
// memoize the Interior function which fetches each user exactly once.
// export const fetchUsers = id => dispatch => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
// 	const response = await jsoPlaceholder.get(`./users/${id}`);

// 	dispatch({ type: "FETCH_USERS", payload: response.data });
// });
