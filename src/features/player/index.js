import react from 'react'
import { connect } from 'react-redux'
import ships from './ships.png'
import handleMovement from './movement'


function Player(props) {
    return (
        <div
            style={{
                position: 'absolute',
                top: props.position[1],
                left: props.position[0],
                backgroundImage: `url('${ships}')`,
                backgroundPostition: '0  0',
                width: '25px',
                height: '25px' 
            }}
            />
      
    )
}


function mapStateToProps(state) {
    return {
        ...state.player
    }
}

export default connect(mapStateToProps)(handleMovement(Player))