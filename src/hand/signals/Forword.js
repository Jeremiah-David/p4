import * as fp from "fingerpose"
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'





export const forwardGesture = new fp.GestureDescription('forward')
    
    forwardGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 6.0)
    forwardGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 6.0)
    
   
    forwardGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 6.0)
    forwardGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 6.0)
    forwardGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 6.0)
    forwardGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 6.0)
    forwardGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 6.0)
    forwardGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 6.0)
    forwardGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 6.0)
    forwardGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 6.0)
    