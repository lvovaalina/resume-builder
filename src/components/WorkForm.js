import React, {useState} from 'react'
import {DatePicker} from 'antd'

const {RangePicker} = DatePicker

const WorkForm = ({savedWork, onSubmitHandler}) => {
    const [work, setWork] = useState(savedWork)

    const onChange = (e) => {
        setWork({
            ...work,
            [e.target.name]: [e.target.value]
        })
    }

    const onChangeDate = (date) => {
        setWork({
            ...work,
            dates: date,
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        onSubmitHandler({
            ...work,
            companyName: work.companyName,
            dates: work.dates,
            description: work.description,
            position: work.position,
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="company-name" className="label">Company name: </label>
            <input 
                id="company-name"
                className="input"
                name="companyName"
                value={work.companyName}
                onChange={onChange}
            />
            <label htmlFor="position" className="label">Position:</label>
            <input
                id="position"
                className="input"
                name="position"
                value={work.position}
                onChange={onChange}
            />
            <label className="label">Duration:</label>
            <RangePicker picker="month" value={work.dates} onChange={onChangeDate} />
            <label htmlFor="description" className="label">Description:</label>
            <input
                id="description"
                className="input"
                name="description"
                value={work.description}
                onChange={onChange}
            />
            <button className="button">Submit</button>
        </form>
    )
}

export default WorkForm