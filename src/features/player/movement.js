import store from '../../config/store'
import { SPRITE_SIZE, Map_Height, Map_Width } from '../../config/constants'
import React, { useState } from 'react';



// const [handPlace, sethandPlace] 




export default function handleMovement(player) {

    // store.getState().hand

    function thumbs_upMove() {

        if (store.getState().hand.hand == 'point_up') {
            store.dispatch({
                type: 'HAND_ACTION',
                payload: {
                    hand: [],
                }
            })

            let i = 0
            for (i = 0; i < 6; i++) {
                return attemptMove('NORTH')


            }
            //    return attemptMove('EAST')
        } else if (store.getState().hand.hand == 'point_right') {
            store.dispatch({
                type: 'HAND_ACTION',
                payload: {
                    hand: [],
                }
            })
            let i = 0
            for (i = 0; i < 6; i++) {
                return attemptMove('EAST')


            }
        } else if (store.getState().hand.hand == 'point_left') {
            store.dispatch({
                type: 'HAND_ACTION',
                payload: {
                    hand: [],
                }
            })
            let i = 0
            for (i = 0; i < 6; i++) {
                return attemptMove('WEST')


            }
        } else if (store.getState().hand.hand == 'point_down') {
            store.dispatch({
                type: 'HAND_ACTION',
                payload: {
                    hand: [],
                }
            })
            let i = 0
            for (i = 0; i < 6; i++) {
                return attemptMove('SOUTH')


            }



        }
    }
    store.subscribe(thumbs_upMove)





    function getNewPosition(oldPos, direction) {

        switch (direction) {
            case 'WEST':
                return [oldPos[0] - SPRITE_SIZE, oldPos[1]]
            case 'NORTH':
                return [oldPos[0], oldPos[1] - SPRITE_SIZE]
            case 'EAST':
                return [oldPos[0] + SPRITE_SIZE, oldPos[1]]
            case 'SOUTH':
                return [oldPos[0], oldPos[1] + SPRITE_SIZE]
        }

        return [oldPos[0] - SPRITE_SIZE, oldPos[1]]
    }

    function observeBoundaries(oldPos, newPos) {
        return (newPos[1] >= 0 && newPos[1] <= Map_Height) &&
            (newPos[0] >= 0 && newPos[0] <= Map_Width)


    }

    function observeImpassable(oldPos, newPos) {
        const tiles = store.getState().map.tiles
        const y = newPos[1] / SPRITE_SIZE
        const x = newPos[0] / SPRITE_SIZE
        const nextTile = tiles[y][x]
        return nextTile < 5
    }

    function dispatchMove(newPos) {

        // const oldPos = store.getState().player.position
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: newPos

            }

        })
    }

    function attemptMove(direction) {
        const oldPos = store.getState().player.position
        const newPos = getNewPosition(oldPos, direction)

        if (observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos))
            dispatchMove(newPos)

    }



    // function handleHandMove(hand) {
    //     switch (store.getState().hand.hand) {
    //         case store.getState().hand.hand.victory:
    //             return attemptMove('EAST')
    //         default: 
    //         console.log('22222', store.getState().hand.hand)
    //     }
    // }

    function handleKeyDown(e) {
        e.preventDefault()
        switch (e.keyCode) {
            case 65:
                // thumbs_upMove() 
                return attemptMove('WEST')
            case 87:
                return attemptMove('NORTH')
            case 68:
                return attemptMove('EAST')
            case 83:
                return attemptMove('SOUTH')
            default:
                console.log(e.keyCode)
        }
    }

    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
    })

    return player
}