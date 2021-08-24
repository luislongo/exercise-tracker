import { useEffect, useState } from 'react'
import { Link, Route } from 'react-router-dom'
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
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {exercises.map((exercise) => 
                    <tr key={exercise._id}>
                        <td>{exercise.username}</td>
                        <td>{exercise.description}</td>
                        <td>{exercise.duration}</td>
                        <td>{exercise.date.substring(0,10)}</td>
                        <td>
                            <button className="btn btn-link" onClick={() => handleExerciseDeleted(exercise._id)}>Delete</button> 
                            |
                            <Link to={'/edit/' + exercise._id}>
                                <button className="btn btn-link">Edit</button>
                            </Link>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>

            
        </div>
    )
}

export default ExercisesList
