import * as fp from "fingerpose"
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'





export const leftGesture = new fp.GestureDescription('leftGesture')
    
leftGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 2.0)
leftGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 5.0)
    
   
leftGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0)
leftGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 5.0)
leftGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0)
leftGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 5.0)
leftGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 1.0)
leftGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 5.0)
leftGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0)
leftGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 5.0)
    