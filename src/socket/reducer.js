const initialState = {
    
    inPos: [3, 3],


}

const incomingPosReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'OTHER_PLAYER':
        return {
            ...action.payload
            
        }


        default: 
            return state
    }
}


export default incomingPosReducer