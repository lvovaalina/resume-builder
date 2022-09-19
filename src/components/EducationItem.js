import React, {useState} from 'react'
import EducationForm from './EducationForm'

const EducationItem = ({ savedEducation, handleSubmit }) => {
    
    const [ editMode, setEditMode ] = useState(false);

    const onEdit = () => {
        setEditMode(true)
    }

    const onSubmit = (updatedEducation) => {
        handleSubmit(updatedEducation)

        setEditMode(false)
    }

    return (
        <div className="ring-2 p-4 my-4 rounded-md flex justify-between ring-gray-200">
            {!editMode ? (
                <>
                <div>
                    <div className="font-bold">{savedEducation.educationName}</div>
                    <div>
                        {savedEducation.educationDates[0].format('YYYY')} - {savedEducation.educationDates[1].format('YYYY')}</div>
                    <div>{savedEducation.degree}</div>
                </div>
                <button className="outline-button" onClick={onEdit}>Edit</button>
                </>
            ) : (
                <EducationForm savedEducation={savedEducation} handleSubmit={onSubmit}></EducationForm>
            )}
        </div>
    )
}

export default EducationItem