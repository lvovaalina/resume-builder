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
            <h1>Work Expirience</h1>
            <button onClick={onCreate}>Add Work</button>
            {create && <WorkForm savedWork={emptyWork} onSubmitHandler={onSubmit} /> }

            {workList.map(work => (
                <WorkItem key={work.id} savedWork={work} onSubmitHandler={onSubmitHandler}/>
            ))}
        </>
    )
}

export default WorkList

