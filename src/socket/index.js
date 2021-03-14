import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import store from '../config/store'
const ENDPOINT = "http://localhost:8100";



function Socket() {







    useEffect(() => {
        const socket = socketIOClient(ENDPOINT)
        socket.on('message', inPos => {
            console.log('iiii', inPos)
            store.dispatch({
                type: 'OTHER_PLAYER',
                payload: {
                    
                    inPos: inPos
                    
                }
            })



        })
    })


    const handleName = (e) => {
        e.preventDefault()
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                name: e.target.value,
                // position: [0, 1,]
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const socket = socketIOClient(ENDPOINT)
        console.log("2345", (store.getState().player.position))
        socket.emit('message', store.getState().player.position)
    }


    return (
        <div>
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