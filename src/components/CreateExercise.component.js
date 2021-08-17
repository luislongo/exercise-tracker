import {useState, useEffect, useRef} from 'react'
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'

const CreateExercise = () => {
    const [username, setUsername] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState(0)
    const [date, setDate] = useState(new Date())
    const [users, setUsers] = useState([])
    const userInput = useRef(null)

    useEffect(() => {
        setUsername('Test user')
        setUsers([
            'Test user','Test user 3','Test user 2','Test user 1','Test user 0'
        ])
        console.log(users)
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

        window.location = '/'
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
