import { combineReducers } from "redux";
import { reducer as userReducer} from "./modules/user/userRedux";
import { ReturnState } from "iron-redux";

export default combineReducers({
    userReducer,
});

const totalReducers = {
    userReducer
};

export type IDEState = ReturnState<typeof totalReducers>;
