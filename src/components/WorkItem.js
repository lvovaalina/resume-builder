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
        <div className="ring-2 p-4 my-4 rounded-md flex justify-between ring-gray-200">
            {!edit &&
            <>
                <div>
                    <div className="font-bold">{savedWork.companyName}</div>
                    <div>{savedWork.position}</div>
                    <div>{savedWork.dates[0].format('MMMM YYYY')} - {savedWork.dates[1].format('MMMM YYYY')}</div>
                    <div>{savedWork.description}</div>
                </div>
                <button  className="outline-button" onClick={onEdit}>Edit</button>
            </>
            }

            {edit &&
                <WorkForm savedWork={savedWork} onSubmitHandler={onSubmit} />
            }
        </div>
    )
}

export default WorkItem