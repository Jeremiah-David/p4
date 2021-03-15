import store from '../../config/store'
import { SPRITE_SIZE, Map_Height, Map_Width } from '../../config/constants'
import React, { useState } from 'react';
import Action from './action'



// const [handPlace, sethandPlace] 




export default function handleMovement(player) {

    // store.getState().hand

    function thumbs_upMove() {

        if (store.getState().hand.hand == 'fist') {
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
        } else if (store.getState().hand.hand == 'forward') {
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
    // store.subscribe(thumbs_upMove)





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

    function dispatchMove(newPos, direction) {

        // const oldPos = store.getState().player.position
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                name: store.getState().player.name,
                position: newPos,
                facing: store.getState().player.facing,
                health: store.getState().player.health,

            }

        })
    }

    function attemptMove(direction) {
        const oldPos = store.getState().player.position
        const newPos = getNewPosition(oldPos, direction)

        if (observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos))
            dispatchMove(newPos)

    }

    function shoot() {
        let a = store.getState().player.position[0]
        let b = store.getState().player.position[1]
        let c = store.getState().player.facing
        let x = store.getState().inPos.position[0]
        let y = store.getState().inPos.position[1]
        let h = store.getState().inPos.health

        if (c === "WEST" && a > y && b === x) {
            console.log(b)
            console.log(y)
            console.log('HIT!')
            store.dispatch({
                type: 'OTHER_PLAYER',
                payload: {
                    name: store.getState().inPos.name,
                    position: [x, y],
                    health: parseInt(h) -1, 
    
                }
    
            })
            
            }

        else if (c === "EAST" && a < y && b === x) {
            console.log('HIT!')
            store.dispatch({
                type: 'OTHER_PLAYER',
                payload: {
                    name: store.getState().inPos.name,
                    position: [x, y],
                    health: parseInt(h) -1, 
    
                }
    
            })
            }
        
        else if (c === "NORTH" && b > x && a === y) {
                console.log('HIT!')
                store.dispatch({
                    type: 'OTHER_PLAYER',
                    payload: {
                        name: store.getState().inPos.name,
                        position: [x, y],
                        health: parseInt(h) -1, 
        
                    }
        
                })
                }
        else if (c === "SOUTH" && b < x && a ===y) {
                    console.log('HIT!')
                    store.dispatch({
                        type: 'OTHER_PLAYER',
                        payload: {
                            name: store.getState().inPos.name,
                            position: [x, y],
                            health: parseInt(h) -1, 
            
                        }
            
                    })
                    }
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
                store.dispatch({
                    type: 'MOVE_PLAYER',
                    payload: {
                        name: store.getState().player.name,
                        position: [store.getState().player.position[0], store.getState().player.position[1]],
                        facing: 'WEST',
                        health: store.getState().player.health,
                    }
                })

                return attemptMove('WEST')
            case 87:
                store.dispatch({
                    type: 'MOVE_PLAYER',
                    payload: {
                        name: store.getState().player.name,
                        position: [store.getState().player.position[0], store.getState().player.position[1]],
                        facing: "NORTH",
                        health: store.getState().player.health,
                        }
                    })
                return attemptMove('NORTH')
            case 68:
                    store.dispatch({
                        type: 'MOVE_PLAYER',
                        payload: {
                            name: store.getState().player.name,
                            position: [store.getState().player.position[0], store.getState().player.position[1]],
                            facing: 'EAST',
                            health: store.getState().player.health,
                        }
                    })
                return attemptMove('EAST')
            case 83:
                        store.dispatch({
                            type: 'MOVE_PLAYER',
                            payload: {
                                name: store.getState().player.name,
                                position: [store.getState().player.position[0], store.getState().player.position[1]],
                                facing: 'SOUTH',
                                health: store.getState().player.health,
                            }
                        })
                        console.log(e.keyCode)
                return attemptMove('SOUTH')

            case 32: 
                        console.log('Trying to hit')
                        shoot()
            default:
                            
                        }
    }

    window.addEventListener('keydown', (e) => {
                            handleKeyDown(e)
                        })

    return player
                }