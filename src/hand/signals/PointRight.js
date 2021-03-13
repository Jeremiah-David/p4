import * as fp from "fingerpose"
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'





export const rightGesture = new fp.GestureDescription('point_right')
    
rightGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0)
// fistGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0)
rightGesture.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 5.0)
   
rightGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0)

rightGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0)

rightGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0)

rightGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0)
