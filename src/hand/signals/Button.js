import * as fp from "fingerpose"
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'





export const buttonGesture = new fp.GestureDescription('button')
    
buttonGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0)
// fistGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0)
    
   
buttonGesture.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl, 5.0)

buttonGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0)

buttonGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0)

buttonGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0)

    