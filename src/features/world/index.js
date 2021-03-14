import React from 'react'
import Player from "../player"
import Map from '../map'

import { tiles } from '../../data/map/1'
import store from '../../config/store'
import Opponent from '../../socket/opponent'
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
            <Map />
            <Player />
            <Socket />

        </div>
    )
}


export default World