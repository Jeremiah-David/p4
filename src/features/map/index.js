import React from 'react'
import { connect } from 'react-redux'
import { SPRITE_SIZE } from '../../config/constants'
import './styles.css'

function getTileSprite(type) {
    switch(type) {
    case 0:
        return 'space'
    case 5: 
        return 'spacestation'
    case 6:
        return 'planet'
    }
}


function MapTile(props) {
    return <div 
    className={`tile ${getTileSprite(props.tile)}`}
    style={{
        height: SPRITE_SIZE,
        width: SPRITE_SIZE,
    }}
    >{props.tile}</div>
}



function MapRow(props) {
    return <div className="row">
        {
            props.tiles.map( tile => <MapTile tile={tile} />)
        }

    </div>
}

function Map(props) {
    return (
        <div
            style={{
                position: 'relative',
                top: '0px',
                left: "0px",
                width: '800px',
                height: '400px',
                backgroundColor: 'grey',
                // border: '4px solid white',

            }}
        >
            {
                props.tiles.map(row => <MapRow tiles={row} />)
            }
        </div>
    )
}

function    mapStatetoProps(state) {
    return {
        tiles: state.map.tiles,
    }
}

export default connect(mapStatetoProps)(Map)