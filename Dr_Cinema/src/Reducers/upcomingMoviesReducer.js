import * as constants from "../Constants";

export default function (state = {}, action) {
    switch (action.type) {
        case constants.GET_UPCOMING: return action.payload;
    }
}