import * as fp from "fingerpose"
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'





export const upGesture = new fp.GestureDescription('point_up')
    
upGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0)
// fistGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0)
    
   
upGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0)
upGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 5.0)
upGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0)

upGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0)

upGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0)

    