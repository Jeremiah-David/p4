import * as fp from "fingerpose"
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'


export const loveYouGesture = new GestureDescription('i_love_you')

// Thumb
loveYouGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0)
loveYouGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 0.25)
loveYouGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 0.25)



// Index
loveYouGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.25)
loveYouGesture.addCurl(fp.Finger.Index, fp.FingerCurl.noCurl, 1.0)


// Pinky 

loveYouGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 0.25)
loveYouGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.noCurl, 1.0)



for (let finger of [Finger.Middle, Finger.Ring]) {
    loveYouGesture.addCurl(finger, FingerCurl.FullCurl, .75)
    loveYouGesture.addDirection(finger, FingerDirection.VerticalDoqn, 0.25)
}