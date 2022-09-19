import React, {useState} from 'react'

import SkillForm from './SkillForm'
import SkillItem from './SkillItem'

const emptySkill = {
    name: '',
    level: 0,
}

const SkillList = ({skillList, onSubmitHandler}) => {
    const [create, setCreate] = useState(false)

    const onCreate = () => {
        setCreate(true)
    }

    const onSubmit = (skill) => {
        onSubmitHandler(skill)

        setCreate(false)
    }
   
    return (
        <>
            <div className="flex justify-between">
            <h2 className="text-3xl my-0">Skills</h2>
            {!create && <button className="outline-button" onClick={onCreate}>Add Skill</button>}
            </div>
            {create && <SkillForm savedSkill={emptySkill} onSubmitHandler={onSubmit} /> }

            {skillList.map(skill => (
                <SkillItem key={skill.id} savedSkill={skill} onSubmitHandler={onSubmitHandler} />
            ))}
        </>
    )
}

export default SkillList