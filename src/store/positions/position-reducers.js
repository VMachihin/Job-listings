import { ADD_POSITIONS } from './position-actions';

export const positionsReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_POSITIONS: {
			return action.payload;
		}
		default: {
			return state;
		}
	}
};
