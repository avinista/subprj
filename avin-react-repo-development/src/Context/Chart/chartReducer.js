import { chartActionType } from "../Types";

const chartReducer = (state, action) => {
    switch (action.type) {
        case chartActionType.CHART_TOGGLE:
            return {...state, chartToggle: action.toggle };
        default:
            return state;
    }
};

export default chartReducer;