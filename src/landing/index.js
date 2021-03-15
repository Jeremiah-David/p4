import store from '../config/store'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function Landing() {



    const handleName = (e) => {
        e.preventDefault()
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                name: e.target.value,
                position: [0, 0]
            }
        })
        
    }


    return (
        <div className="form-group">
            <form>
                <label htmlFor="userName">User Name</label>
                <input type="text" name="userName" onChange={handleName} className="form-control" />
                <Link to={'/world'}>Go Play!</Link >
            
            </form>
        </div>
    )
}

export default Landing