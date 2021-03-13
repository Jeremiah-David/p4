import * as fp from "fingerpose"
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'





export const downGesture = new fp.GestureDescription('point_down')
    
downGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0)
// fistGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0)
downGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalDown, 5.0)
   
downGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0)

downGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0)

downGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0)

downGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0)

    