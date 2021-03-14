import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import store from '../config/store'
const ENDPOINT = "https://p4s1.herokuapp.com/";



function Socket() {


    let [text, setText] = useState('')
    let [inPos, setInPos] = useState('')




    useEffect(() => {
        const socket = socketIOClient(ENDPOINT)
        socket.on('message', inPos => {


            setInPos(inPos)

        })
    })


    // const handleText = (e) => {
    //     e.preventDefault()
    //     let newtext = text
    //     let alltext = newtext + e.target.value
    //     setText(alltext);
    // }

    const handleSubmit = (e) => {
        e.preventDefault()

        const socket = socketIOClient(ENDPOINT)
        console.log("2345",  (store.getState().player.position))
        socket.emit('message', store.getState().player.position)
    }


    return (
        <div>
            <h1>console.log({inPos}) {'****', console.log({ inPos })}</h1>


            < form onSubmit={handleSubmit} >
                <div className="form-group">

                    {/* <label htmlFor="text">User Name</label>
                    <input type="text" name="text" value={text} onChange={handleText} className="form-control" /> */}
                    <button type="submit" className="btn btn-primary float-right">Submit</button>
                </div>
            </form >
        </div>

    )
}

export default Socket