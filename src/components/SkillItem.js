import React, {useState} from 'react'
import {Rate} from 'antd'
import SkillForm from './SkillForm'

const SkillItem = ({savedSkill, onSubmitHandler}) => {
    const [edit, setEdit] = useState(false)

    const onEdit = () => {
        setEdit(true)
    }

    const onSubmit = (skill) => {
        onSubmitHandler(skill)

        setEdit(false)
    }

    return (
        <>
            {!edit &&
                <div className="flex justify-between">
                    <div className="flex justify-between items-center">
                        <div className="mr-4">{savedSkill.name}</div>
                        <Rate disabled value={savedSkill.level}/>
                    </div>
                    <button className="outline-button" onClick={onEdit}>Edit</button>
                </div>
            }

            {edit && <SkillForm savedSkill={savedSkill} onSubmitHandler={onSubmit}/>}
        </>
    )
}

export default SkillItem