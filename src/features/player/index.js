import react from 'react'
import { connect } from 'react-redux'
import ships from './ships.png'
import handleMovement from './movement'
import store from '../../config/store'


function Player(props) {
    let x = store.getState().inPos.position[0]
    let y = store.getState().inPos.position[1]

    function updateEnemy() {
        let x = store.getState().inPos.position[0]
        let y = store.getState().inPos.position[1]
    console.log('xxxxx', x, y)
    }

    // store.subscribe(updateEnemy)




    return (
        <div>
            <p>{store.getState().player.health} Player Health</p>
            <p>{store.getState().inPos.health} Opponent Health</p>
        <div
            style={{
                position: 'absolute',
                top: props.position[1],
                left: props.position[0],
                backgroundImage: `url('${ships}')`,
                backgroundPostition: '0  0',
                width: '25px',
                height: '25px' 
            }} />
                    <div
                
                style={{
                    position: 'absolute',
                    top: y,
                    left: x,
                    backgroundImage: `url('${ships}')`,
                    backgroundPostition: '75,  75',
                    width: '75px',
                    height: '25px' 
                }} />


                
            
            </div>
    )
}


function mapStateToProps(state) {
    return {
        ...state.player
    }
}

export default connect(mapStateToProps)(handleMovement(Player))