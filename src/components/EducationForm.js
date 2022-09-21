import React, { useEffect, useState } from 'react'
import { Space, DatePicker } from 'antd'

const {RangePicker} = DatePicker

const EducationForm = ({savedItem, handleSubmit}) => {
    const [education, setEducation] = useState({
        id: null,
        educationName: '',
        educationDates: [],
        degree: '',
    })

    useEffect(() => {
        if (!!savedItem) {
            setEducation(savedItem)
        }
    }, [savedItem])

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

    const onSubmit = (e) => {
        e.preventDefault()

        handleSubmit({
            id: education.id,
            educationName: education.educationName,
            educationDates: education.educationDates,
            degree: education.degree,
        })
    }

    return (
        <div className="ring-2 p-4 my-4 rounded-md flex flex-col justify-between ring-gray-200">
            <form onSubmit={onSubmit}>
            <label className="label" htmlFor="education-name">Name:</label>
            <input
                required
                className="input"
                id="education-name"
                type="text" name="educationName" value={education.educationName} onChange={onChange}/>
            <label className="label" htmlFor="start-date">Education years:</label>
            <Space>
                <RangePicker value={education.educationDates} onChange={onChangeDate} picker="year"/>
            </Space>
            <label className="label" htmlFor="degree">Degree:</label>
            <input
                required
                className="input"
                id="degree" type="text"
                name="degree"
                value={education.degree}
                onChange={onChange}/>
            <button className="button w-24">Submit</button>
            </form>
        </div>)
}

export default EducationForm