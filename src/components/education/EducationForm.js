import React, { useEffect, useState } from 'react'
import { Space, DatePicker } from 'antd'

const {RangePicker} = DatePicker

const EducationForm = (
    {savedEducation, handleSubmit}
) => {
    const [education, setEducation] = useState(savedEducation)

    const onChangeDate = (date) => {
        setEducation({
            ...education,
            educationDates: date,
        })
      };

    const onChange = e => {
        setEducation({
            ...education,
            [e.target.name]: [e.target.value]
        })
    }

    const onSubmit = () => {
        handleSubmit({
            id: education.id,
            educationName: education.educationName,
            educationDates: education.educationDates,
            degree: education.degree,
        })
    }

    return (
        <div>
            <label className="label" htmlFor="education-name">Name:</label>
            <input
                className="input"
                id="education-name"
                type="text" name="educationName" value={education.educationName} onChange={onChange}/>
            <label className="label" htmlFor="start-date">Education years:</label>
            <Space>
                <RangePicker value={education.educationDates} onChange={onChangeDate} picker="year"/>
            </Space>
            <label className="label" htmlFor="degree">Degree:</label>
            <input
                className="input"
                id="degree" type="text"
                name="degree"
                value={education.degree}
                onChange={onChange}/>
            <button className="button" onClick={onSubmit}>Submit</button>
        </div>)
}

export default EducationForm