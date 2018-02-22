// ------------------------------------
// Reducer
// ------------------------------------
import createReducer from '../../../../../util/createReducer';

const initialState = {
    data: {
        country: '美国',
        maxNum: "50"
    },
    loaded: false,
    role: {rows: []}
};
export default createReducer(initialState, {
    "REDUCER": (state, {data}) => {
        return {...state, ...data, loaded: true}
    }
})