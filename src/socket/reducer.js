// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
//   }
  
// let x = getRandomInt0)
// let y = getRandomInt(150)



const initialState = {
    name: "",
    position: [100, 100],
    facing: '',
    health: 10


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