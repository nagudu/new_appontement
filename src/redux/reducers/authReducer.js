// USERsReducer.js
import { CREATE_USER, UPDATE_USER, DELETE_USER, AUTH_USER, LOGOUT } from '../actions/authConstants'

const defaultState = {
	user: {},
	users: [],
	agent: {},
	agent: [],
	errors: [],
	notifications: [],
};

const authReducer = (state = defaultState, action) => {
	switch (action.type) {
		case CREATE_USER:
			return {
				...state,
				users: [...state.users, action.payload.user],
				agents: [...state.agents, action.payload.agent]
			};
		case AUTH_USER:
			return {
				...state,
				user: action.payload.user,
				agent: action.payload.agent
			};
		case UPDATE_USER:
			return {
				...state,
				user: action.payload.user,
				agent: action.payload.agent
			};
		case UPDATE_USERS:
			return {
				...state,
				users: [...state.users, action.payload.user],
				agents: [...state.agents, action.payload.agent]
			};

		case LOGOUT:
			return { ...state, user: {}, agent: {} };
		default:
			return state;
	}
};

export default authReducer;