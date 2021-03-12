import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import store from '../config/store'

import * as tf from '@tensorflow/tfjs'

import * as handpose from "@tensorflow-models/handpose"
import Webcam from 'react-webcam'
import '../App.css'
import { drawHand } from './utilities'

//import my test images!

import * as fp from "fingerpose"
import victory from '../hellyah.png'
import thumbs_up from '../thumbsup.png'

// import some custom handsignals yo!
import { loveYouGesture } from './signals/LoveYou'
import { thumbsDownGesture } from './signals/ThumbDown'
import { forwardGesture } from './signals/Forword'
import { fistGesture } from './signals/Fist'
import { leftGesture } from './signals/Left'
import { buttonGesture } from './signals/Button'
import { pointUpGesture } from './signals/PointUp'








function Hand() {
    
    
    
    // function addGesture() {
    // const thumbsDownGesture = new fp.GestureDescription('thumbs_down')
    
    // thumbsDownGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0)
    // thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalDown, 1.0)
    // thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownLeft, 0.5)
    // thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownRight, 0.5)
    // thumbsDownGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0)
    // thumbsDownGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0)
    // thumbsDownGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0)
    // thumbsDownGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0)
    // }
    // addGesture()
    const webcamRef = useRef(null)
    const canvasRef = useRef(null)

    const [hand, sethand] = useState(null)
    const images = { thumbs_up: thumbs_up, victory: victory }


    const runHandpose = async () => {
        const net = await handpose.load()
        // console.log('Handpose model loaded.')
        // Loop and detect hands
        setInterval(() => {
            detect(net)
        }, 500)
    }

    const detect = async (net) => {
        // Check if data is available
       
        if (
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4
        ) {
            // get video properties
            const video = webcamRef.current.video
            const videoWidth = webcamRef.current.video.videoWidth
            const videoHeight = webcamRef.current.video.videoHeight
            // set video height and width
            webcamRef.current.video.width = videoWidth
            webcamRef.current.video.height = videoHeight

            //set canvas height and width
            canvasRef.current.width = videoWidth
            canvasRef.current.height = videoHeight

            // make detections
            const hand = await net.estimateHands(video)
            console.log(hand)

            if (hand.length > 0) {
                const GE = new fp.GestureEstimator([
                    loveYouGesture,
                    fp.Gestures.VictoryGesture,
                    fp.Gestures.ThumbsUpGesture,
                    // thumbsDownGesture,
                    // forwardGesture,
                    fistGesture,
                    leftGesture,
                    buttonGesture,
                    pointUpGesture,
                    leftGesture,
                    // console.log('!!!!!', + fp.Gestures)
                ])

                const gesture = await GE.estimate(hand[0].landmarks, 8)
                // console.log(gesture)
                if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
                    const confidence = gesture.gestures.map((prediction) => prediction.confidence)
                    const maxConfidence = confidence.indexOf(Math.max.apply(null, confidence))
                    sethand(gesture.gestures[maxConfidence].name)
                    store.dispatch({
                        type: 'HAND_ACTION',
                        payload: {
                            hand: gesture.gestures[maxConfidence].name
            
                        }
            
                    })
                    console.log(hand)
                }

            }

            // draw mesh
            const ctx = canvasRef.current.getContext('2d')
            drawHand(hand, ctx)

            

        }
    }

    runHandpose();



    return (
        <div className='hand'>
            <header className="hand-header">
                <Webcam
                    ref={webcamRef}
                    style={{
                        position: "absolute",
                        marginLeft: "auto",
                        marginRight: "auto",
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        zindex: 9,
                        width: 640,
                        height: 480,

                    }} />

                <canvas
                    ref={canvasRef}
                    style={{
                        position: 'absolute',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        zindex: 9,
                        width: 640,
                        height: 480,
                    }}

                />
                {hand !== null ? <img src={images[hand]} style={{
                    position: 'absolute',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    
                    top: 500,
                    bottom:500,
                    right: 200,
                    textAlign: "center",
                    zindex: 9,
                    width: 200,
                    height: 200,
                }} />:''}





            </header>



        </div>
    )
}

function    mapStatetoProps(state) {
    return {
        hands: state.hand
    }
}

export default connect(mapStatetoProps)(Hand)

// export default Hand