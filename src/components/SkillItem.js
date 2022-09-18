import React, {useState} from 'react'
import {Rate, Slider} from 'antd'
import SkillForm from './SkillForm'
import SkillList from './SkillList'

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
                <div>
                    <div>{savedSkill.name}</div>
                    <Rate disabled value={savedSkill.level}/>
                    <button onClick={onEdit}>Edit</button>
                </div>
            }

            {edit && <SkillForm savedSkill={savedSkill} onSubmitHandler={onSubmit}/>}
        </>
    )
}

export default SkillItem