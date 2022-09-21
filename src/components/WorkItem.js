import React, {useState} from 'react'
import WorkForm from './WorkForm'

const WorkItem = ({savedItem, handleSubmit}) => {

    const [edit, setEdit] = useState(false)

    const onEdit = () => {
        setEdit(true)
    }

    const onSubmit = (work) => {
        handleSubmit(work)

        setEdit(false)
    }

    return (
        <div className="ring-2 p-4 my-4 rounded-md flex justify-between ring-gray-200">
            {!edit &&
            <>
                <div>
                    <div className="font-bold">{savedItem.companyName}</div>
                    <div>{savedItem.position}</div>
                    <div>{savedItem.dates[0].format('MMMM YYYY')} - {savedItem.dates[1].format('MMMM YYYY')}</div>
                    <div>{savedItem.description}</div>
                </div>
                <button  className="outline-button" onClick={onEdit}>Edit</button>
            </>
            }

            {edit &&
                <WorkForm savedItem={savedItem} handleSubmit={onSubmit} />
            }
        </div>
    )
}

export default WorkItem