import * as fp from "fingerpose"
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'





export const leftGesture = new fp.GestureDescription('left')
    
leftGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0)
// fistGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0)
leftGesture.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 5.0)
   
leftGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0)

leftGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0)

leftGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0)

leftGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0)

    