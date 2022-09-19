import React, {useState} from 'react'
import WorkForm from './WorkForm'
import WorkItem from './WorkItem'

const emptyWork = {
    companyName: '',
    dates: [],
    description: '',
    position: '',
}

const WorkList = ({workList, onSubmitHandler}) => {
    const [create, setCreate] = useState(false)

    const onCreate = () => {
        setCreate(true)
    }

    const onSubmit = (work) => {
        onSubmitHandler(work)

        setCreate(false)
    }

    return (
        <>
            <div className="flex justify-between">
                <h2 className="text-3xl my-0">Work Expirience</h2>
                <button className="outline-button" onClick={onCreate}>Add Work</button>
            </div>
            {create && <WorkForm savedWork={emptyWork} onSubmitHandler={onSubmit} /> }

            {workList.map(work => (
                <WorkItem key={work.id} savedWork={work} onSubmitHandler={onSubmitHandler}/>
            ))}
        </>
    )
}

export default WorkList

