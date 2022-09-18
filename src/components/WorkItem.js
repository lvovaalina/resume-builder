import React, {useState} from 'react'
import WorkForm from './WorkForm'

const WorkItem = ({savedWork, onSubmitHandler}) => {

    const [edit, setEdit] = useState(false)

    const onEdit = () => {
        setEdit(true)
    }

    const onSubmit = (work) => {
        onSubmitHandler(work)

        setEdit(true)
    }

    return (
        <>
            {!edit &&
                <div>
                    <div>{savedWork.companyName}</div>
                    <div>{savedWork.position}</div>
                    <div>{savedWork.dates[0].format('MMMM YYYY')} - {savedWork.dates[1].format('MMMM YYYY')}</div>
                    <div>{savedWork.description}</div>
                    <button onClick={onEdit}>Edit</button>
                </div>
            }

            {edit &&
                <WorkForm savedWork={savedWork} onSubmitHandler={onSubmit} />
            }
        </>
    )
}

export default WorkItem