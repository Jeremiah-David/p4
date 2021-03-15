import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import store from '../config/store'
import Opponent from "./opponent";
import ships from '../features/player/ships.png'
const ENDPOINT = "https://p4s1.herokuapp.com/";


function Opponents(opponent) {







    useEffect(() => {
        const socket = socketIOClient(ENDPOINT)
        socket.on('message', inPos => {
            // console.log('iiii', inPos)
            if (inPos.name !== store.getState().player.name) {
                store.dispatch({
                    type: 'OTHER_PLAYER',
                    payload: {

                        name: inPos.name,
                        position: inPos.position,
                        faceing: inPos.facing, 
                        health: inPos.health

                    }
                })
                return inPos
               
                
            }



        })
    })







    





    const handleSubmit = () => {
        // e.preventDefault()

        const socket = socketIOClient(ENDPOINT)
        // console.log("2345", (store.getState().player.position))
        socket.emit('message', store.getState().player)
    }

    store.subscribe(handleSubmit)



    function renderOpponent() {
        return 
    }


    return (
        <div>
            
            {/* <h1>console.log({inPos}) {'****', console.log({ inPos })}</h1> */}


            < form onSubmit={handleSubmit} >
                <div >


                </div>
            </form >
        </div>

    )
    return opponent
}

export default Opponents