import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ExercisesList = () => {
    const [exercises, setExercises] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:5000/exercises/')
            .then((res) => setExercises(res.data))
    }, [])

    const handleExerciseDeleted = (id) => {
        axios.delete('http://localhost:5000/exercises/' + id)
            .then((res) => {
                console.log(res)
                setExercises(exercises.filter((exercise) => exercise._id !== id))
            })
    }   
 
    return (
        <div>
            <table className='table table-sm'>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {exercises.map((exercise) => 
                    <tr>
                        <td>{exercise.username}</td>
                        <td>{exercise.description}</td>
                        <td>{exercise.duration}</td>
                        <td>{exercise.date.substring(0,10)}</td>
                        <td>
                            <button onClick={() => handleExerciseDeleted(exercise._id)}>Delete</button>
                        </td>
                        <td>
                            <button onClick={() => handleExerciseDeleted(exercise._id)}>Edit</button>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>

            
        </div>
    )
}

export default ExercisesList
