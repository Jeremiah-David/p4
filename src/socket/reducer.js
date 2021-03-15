function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
let x = getRandomInt(150)
let y = getRandomInt(150)



const initialState = {
    name: "",
    position: [x, y],


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