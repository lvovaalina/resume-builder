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

        console.log('sdfsdf')

        setCreate(false)
    }
   
    return (
        <>
            <h2>Skills</h2>
            {!create && <button onClick={onCreate}>Add Skill</button>}
            {create && <SkillForm savedSkill={emptySkill} onSubmitHandler={onSubmit} /> }

            {skillList.map(skill => (
                <SkillItem key={skill.id} savedSkill={skill} onSubmitHandler={onSubmitHandler} />
            ))}
        </>
    )
}

export default SkillList