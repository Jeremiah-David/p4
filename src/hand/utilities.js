
// Poit for fingers
const fingerJoints = {
    thumb: [0,1,2,3,4,],
    indexFinger: [0,5,6,7,8],
    middleFinger: [0,9,10,11,12],
    ringFinger: [0,13,14,15,16],
    pinky: [0,17,18,19,20],
}

// drawing function
export const drawHand = (predictions, ctx) => {
    // Check if we have predictions
    if (predictions.length > 0) {
        // Loop through each prediction
        predictions.forEach((prediction) => {

                //grab landmarks
            const landmarks = prediction.landmarks

                // loop through fingers
                for (let j = 0; j < Object.keys(fingerJoints).length; j++) {
                    let finger = Object.keys(fingerJoints)[j]
                    //Loop through pairs of joints
                    for (let k=0; k<fingerJoints[finger].length -1; k++) {
                        //get pair of joints
                        const firstJointIndex = fingerJoints[finger] [k]
                        const secondJointIndex = fingerJoints[finger] [k+1]


                        // Draw path
                        ctx.beginPath()
                        ctx.moveTo(
                            landmarks[firstJointIndex][0],
                            landmarks[firstJointIndex][1]
                        )
                        ctx.lineTo(
                            landmarks[secondJointIndex][0],
                            landmarks[secondJointIndex][1]
                        )
                        ctx.strokeStyle = 'plum'
                        ctx.lineWidth =4
                        ctx.stroke()
                    }
                } 


            // loop through landmarks and draw em
            for (let i = 0; i < landmarks.length; i++) {

                //get x Point
                const x = landmarks[i][0]

                //get y Point
                const y = landmarks[i][1]

                // start drawing
                ctx.beginPath()
                ctx.arc(x, y, 5, 0, 3 * Math.PI)

                //set line color
                //https://www.w3schools.com/tags/canvas_arc.asp
                ctx.fillStyle = "indigo";
                ctx.fill();

            }
        })
    }
}







// References Mentioned:
//Create React App: https://reactjs.org/docs/create-a-new...​
//Tensorflow.JS: https://www.tensorflow.org/js/models​
// React Webcam: https://www.npmjs.com/package/react-w...​
// HTML Canvas: https://www.w3schools.com/tags/canvas...​

// Oh, and don't forget to connect with me!
// LinkedIn: https://www.linkedin.com/in/nicholasr...​
// Facebook: https://www.facebook.com/nickrenotte/​
// GitHub: https://github.com/nicknochnack