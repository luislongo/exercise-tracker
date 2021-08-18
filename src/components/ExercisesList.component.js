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
            .then((res) => console.log(res))
    }   
 
    return (
        <div>
            {exercises.map((exercise) => 
                <div>
                    <h3>{exercise.description}</h3>
                    <h4>{exercise.username}</h4>
                    <h5>{exercise.duration}</h5>
                    <button onClick={() => handleExerciseDeleted(exercise._id)}>Delete</button>
                </div>
            )}
        </div>
    )
}

export default ExercisesList
