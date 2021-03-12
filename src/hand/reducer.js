
const initialState = {
    hand: [],


}

const handReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'HAND_ACTION':
        return {
            ...action.payload
            
        }


        default: 
            return state
    }
}


export default handReducer