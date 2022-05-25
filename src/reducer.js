export default function rootReducer(state, action) {
    let newData, deedIndex;
    switch (action.type) {
        case 'todos/add':
            newData = [...state.data];
            newData.push(action.payload)
            return { ...state, data: newData}
        case 'todos/setDone':
            // console.log('----in setDone----')
            newData = [...state.data];
            // console.log('...state.data', newData)
            deedIndex = newData.findIndex(
                (current) => current.key === action.payload
            );
            if (deedIndex > -1)
                newData[deedIndex] = { ...newData[deedIndex], done: true}
            return { ...state, data: newData}
        case 'todos/delete':
            newData = state.data.filter(
                (current) => current.key !== action.payload
            );
            return { ...state, data: newData };
        default:
            return state;
    }
}