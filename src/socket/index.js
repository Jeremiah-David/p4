import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import store from '../config/store'

import ships from '../features/player/ships.png'
const ENDPOINT = "https://p4s1.herokuapp.com/";


function Opponents(opponent) {




    let sendData = () =>  {
        const socket = socketIOClient(ENDPOINT)
        socket.on('message', inPos => {
        console.log('iiii', inPos)
            if (inPos.name !== store.getState().player.name) {
                store.dispatch({
                    type: 'OTHER_PLAYER',
                    payload: {
                        name: inPos.name,
                        position: inPos.position,
                        facing: inPos.facing,
                        health: inPos.health,
                        
                    }
                })
            }
            socket.emit('message', store.getState().player)
        })
    }

    setInterval(() => sendData(), 10000);
        // useEffect(() =>  {
        //     // e.preventDefault()

        //     const socket = socketIOClient(ENDPOINT)
        //     // console.log("2345", (store.getState().player.position))
        //     socket.emit('message', store.getState().player)
        // })

        return (
            <div>
                <h1>Whatever</h1>
            </div>
        )

    }


    export default Opponents