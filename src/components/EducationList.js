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
        <div className="flex justify-between">
            <h2 className="text-3xl">Education</h2>

            {!create && <button class="outline-button" onClick={() => setCreate(true)}>Add Education </button>}
        </div>
        {create && <EducationForm savedEducation={emptyEducation} handleSubmit={onCreate}/>}
        
        {educationList.map((education) => (
            <EducationItem key={education.id} savedEducation={education} handleSubmit={handleSubmit}/>
        ))}
        </>
    )
}

export default EducationList
