import React, {useEffect, useState} from 'react'
import {Rate} from 'antd'

const SkillForm = ({savedItem, handleSubmit}) => {
    const [skill, setSkill] = useState({
        id: null,
        name: '',
        level: 0,
    })

    useEffect(() => {
        if (!!savedItem) {
            setSkill(savedItem)
        }
    }, [savedItem])

    const onChange = e => {
        setSkill({
            ...skill,
            [e.target.name]: [e.target.value]
        })
    }

    const onSubmit = e => {
        e.preventDefault()

        handleSubmit({
            ...savedItem,
            name: skill.name,
            level: skill.level,
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="skill-name" className="label">Name:</label>
            <input id="skill-name" value={skill.name} className="input" name="name" onChange={onChange}/>

            <Rate value={skill.level} default={3} onChange={(value) => {setSkill({...skill, level: value,})}}/>
            <button className="button">Submit</button>
        </form>
    )
}

export default SkillForm