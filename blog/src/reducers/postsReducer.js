export default (state = [], action) => {
	// Maintain a list of posts we get from the api
	switch (action.type) {
		case "FETCH_POSTS":
			return action.payload;
		default:
			return state;
	}
};
