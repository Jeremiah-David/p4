import React from 'react'
import Player from "../player"
import Map from '../map'
import Hand from '../../hand'

import { tiles } from '../../data/map/1'
import store from '../../config/store'
import Opponents from '../../socket/index'
import { Socket } from 'socket.io-client'





function World(props) {
    store.dispatch({
        type: 'ADD_TILES', payload: {
            tiles,
        }
    })
    return (
        <div
            style={{
                position: 'relative',
                width: '800px',
                height: '400px',
                margin: '20px auto',
            }}>
            {/* <Map /> */}
            {/* <Player /> */}
            {/* <Opponents /> */}
            <Hand />
        </div>
    )
}



export default World