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
        <>
            {!editMode ? (
                <div>
                    <div>{savedEducation.educationName}</div>
                    <div>
                        {savedEducation.educationDates[0].format('YYYY')}
                         - {savedEducation.educationDates[1].format('YYYY')}</div>
                    <div>{savedEducation.degree}</div>
                    <button className="outline-button" onClick={onEdit}>Edit</button>
                </div>
            ) : (
                <EducationForm savedEducation={savedEducation} handleSubmit={onSubmit}></EducationForm>
            )}
        </>
    )
}

export default EducationItem