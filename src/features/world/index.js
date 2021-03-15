import React from 'react'
import Player from "../player"
import Map from '../map'

import { tiles } from '../../data/map/1'
import store from '../../config/store'
import Opponents from '../../socket/index'
import { Socket } from 'socket.io-client'
import Opponent from '../../socket/opponent'



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
            <Map />
            <Player />
            <Opponent />
            <Opponents/>
        </div>
    )
}



export default World