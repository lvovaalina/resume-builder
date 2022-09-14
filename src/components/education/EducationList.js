import React, { useState } from 'react'
import EducationForm from './EducationForm'
import EducationItem from './EducationItem'

let emptyEducation = {
    educationName: '',
    educationDuration: [],
    degree: '',
}

const EducationList = ({educationList, handleSubmit}) => {
    const [create, setCreate] = useState(false);

    const onCreate = (createdEducation) => {
        handleSubmit(createdEducation)

        setCreate(false)
    }

    return (
        <>
        <h2>Education</h2>

        {!create && <button onClick={() => setCreate(true)}>Add Education</button>}
        {create && <EducationForm savedEducation={emptyEducation} handleSubmit={onCreate}/>}
        
        {educationList.map((education) => (
            <EducationItem key={education.id} savedEducation={education} handleSubmit={handleSubmit}/>
        ))}
        </>
    )
}

export default EducationList
