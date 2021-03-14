import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import store from '../config/store'
import Opponent from "./opponent";
import ships from '../features/player/ships.png'
const ENDPOINT = "https://p4s1.herokuapp.com/";


function Socket() {







    useEffect(() => {
        const socket = socketIOClient(ENDPOINT)
        socket.on('message', inPos => {
            console.log('iiii', inPos)
            if (inPos.name !== store.getState().player.name) {
                store.dispatch({
                    type: 'OTHER_PLAYER',
                    payload: {

                        name: inPos.name,
                        position: inPos.position

                    }
                })
                return inPos
               
                
            }



        })
    })


    const handleName = (e) => {
        e.preventDefault()
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                name: e.target.value,
                position: [store.getState().player.position[0], store.getState().player.position[1]]
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const socket = socketIOClient(ENDPOINT)
        console.log("2345", (store.getState().player.position))
        socket.emit('message', store.getState().player)
    }


    function renderOpponent() {
        return 
    }


    return (
        <div>
             <div
                
            style={{
                position: 'absolute',
                top: store.getState().inPos.postition[0],
                left: store.getState().inPos.postition[1],
                backgroundImage: `url('${ships}')`,
                backgroundPostition: '25,  25',
                width: '25px',
                height: '25px' 
            }}
            />
            {/* <h1>console.log({inPos}) {'****', console.log({ inPos })}</h1> */}


            < form onSubmit={handleSubmit} >
                <div >

                    <label htmlFor="Player Name">User Name</label>
                    <input type="text" name="text" value={handleName} onChange={handleName} />
                    <button type="submit" className="btn btn-primary float-right">Submit</button>
                </div>
            </form >
        </div>

    )
}

export default Socket