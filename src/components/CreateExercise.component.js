import {useState, useEffect, useRef} from 'react'
import DatePicker from "react-datepicker"
import axios from 'axios'

import 'react-datepicker/dist/react-datepicker.css'

const CreateExercise = () => {
    const [username, setUsername] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState(0)
    const [date, setDate] = useState(new Date())
    const [users, setUsers] = useState([])
    const userInput = useRef(null)

    useEffect(() => {
        axios.get('http://localhost:5000/users/')
            .then((res) => 
                {
                    setUsers(res.data.map((user) => user.username))
                    setUsername(res.data[0].username)
                })
    }, [])
            

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const handleDurationChange = (e) => {
        setDuration(e.target.value)
    }

    const handleDateChange = (date) => {
        setDate(date)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const newExercise = {
            username : username,
            description : description,
            duration : duration,
            date : date
        }

        axios.post('http://localhost:5000/exercises/add', newExercise)
            .then((res) => console.log(res))
            .catch((err) => 
            {
                console.log(newExercise)
                console.log(err)
            })

        //window.location = '/'
    }

    return (
        <div>
            <h3>Create new exercise</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className='form-group'>
                    <label>Username: </label>
                    <select 
                    ref={userInput} 
                    required className='form-control'
                    value={username}
                    onChange={(e) => handleUsernameChange(e)}
                    >
                        {
                            users.map((user) => {return (
                                <option key={user} value={user}>
                                    {user}
                                </option>
                            )
                            })
                        }
                    </select>
                </div>
                <div className='form-group'>
                    <label>Description: </label>
                    <input 
                    required
                    type='text' 
                    className='form-control' 
                    value={description} 
                    onChange={(e) => handleDescriptionChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <label>Duration: </label>
                    <input
                    required
                    type='text'
                    className='form-control'
                    value={duration}
                    onChange={(e) => handleDurationChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <label>Date: </label>
                    <DatePicker
                        required
                        selected={date}
                        onChange={(date) => handleDateChange(date)}
                    />
                </div>
                <input type='Submit' value='Submit' className='btn btn-primary' />

            </form>
        </div>
    )
}

export default CreateExercise
