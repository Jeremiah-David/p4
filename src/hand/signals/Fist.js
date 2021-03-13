import * as fp from "fingerpose"
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'





export const fistGesture = new fp.GestureDescription('fist')
    
fistGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 8.0)
// fistGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0)
    
   
fistGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 8.0)

fistGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 8.0)

fistGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 8.0)

fistGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 8.0)

    