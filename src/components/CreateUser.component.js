import {useState} from 'react'
import axios from 'axios'

const CreateUser = () => {
    const [username, setUsername] = useState('')

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newUser = {
            username : username
        }

        axios.post('http://localhost:5000/users/add', newUser).then(res=>console.log(res))
        setUsername('')
    }

    return (
        <div>
            <h3>Create user</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className='form-group'>
                    <label></label>
                    <input 
                    className='form-control' 
                    type='text' 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <input className='btn btn-primary' type='submit' value='Submit' />
            </form> 
        </div>
    )
}

export default CreateUser
