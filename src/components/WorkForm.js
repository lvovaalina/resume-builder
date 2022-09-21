import React, {useState, useEffect} from 'react'
import {DatePicker} from 'antd'

const {RangePicker} = DatePicker

const WorkForm = ({savedItem, handleSubmit}) => {
    const [work, setWork] = useState({
        id: null,
        companyName: '',
        dates: [],
        description: '',
        position: '',
    })

    useEffect(() => {
        if (!!savedItem) {
            setWork(savedItem)
        }
    }, [savedItem])

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

        handleSubmit({
            ...work,
            companyName: work.companyName,
            dates: work.dates,
            description: work.description,
            position: work.position,
        })
    }

    return (
        <div className="ring-2 p-4 my-4 rounded-md flex flex-col justify-between ring-gray-200">
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
                <button className="button w-24">Submit</button>
            </form>
        </div>
        
    )
}

export default WorkForm