import React, {useState} from 'react'
import {Rate} from 'antd'
import SkillForm from './SkillForm'

const SkillItem = ({savedItem, handleSubmit}) => {
    const [edit, setEdit] = useState(false)

    const onEdit = () => {
        setEdit(true)
    }

    const onSubmit = (skill) => {
        handleSubmit(skill)

        setEdit(false)
    }

    return (
        <>
            {!edit &&
                <div className="flex justify-between">
                    <div className="flex justify-between items-center">
                        <div className="mr-4">{savedItem.name}</div>
                        <Rate disabled value={savedItem.level}/>
                    </div>
                    <button className="outline-button" onClick={onEdit}>Edit</button>
                </div>
            }

            {edit && <SkillForm savedItem={savedItem} handleSubmit={onSubmit}/>}
        </>
    )
}

export default SkillItem