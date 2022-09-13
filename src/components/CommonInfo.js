import React, { useState } from 'react'
import { BsPersonCircle } from 'react-icons/bs'

const CommonInfo = ({ savedCommonInfo, handleSave }) => {
    const [ commonInfo, setCommonInfo ] = useState({
        edit: false,
        photo: null,
        name: '',
        surname: '',
        summary: '',
    })

    const handleEdit = () => {
        setCommonInfo({
            name: savedCommonInfo.name,
            surname: savedCommonInfo.surname,
            summary: savedCommonInfo.summary,
            photo: savedCommonInfo.photo,
            edit: true,
        })
    }

    const onSave = () => {
        handleSave({
            photo: commonInfo.photo,
            summary: commonInfo.summary,
            name: commonInfo.name,
            surname: commonInfo.surname,
        });

        setCommonInfo({
            name: '',
            surname: '',
            summary: '',
            photo: '',
            edit: false,
        })
    }

    const onChange = (e) => {
        setCommonInfo({
            ...commonInfo,
            [e.target.name]: e.target.value,
        })
    }

    const onFileInputChange = (e) => {
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
 
        reader.onload = (e) => {
            console.log(e.target.result);
            setCommonInfo({
                ...commonInfo,
                photo: e.target.result,
            })
        }
    }

    return (
        <>
        { !commonInfo.edit ? (
            <div className="flex justify-around">
                <div>
                {!savedCommonInfo.photo ? (<BsPersonCircle className='text-4xl' />)
                : (<img src={savedCommonInfo.photo} className="w-28 rounded-full" alt="Resume shot" />)}
                </div>
                <div className="flex flex-col">
                    <div>{savedCommonInfo.name} {savedCommonInfo.surname}</div>
                    <label>Summary</label>
                    <div>{savedCommonInfo.summary}</div>
                </div>
                <button onClick={handleEdit}>Edit</button>
           </div>)
        : (
            <div className="flex justify-around">
                <div>
                    <img src={commonInfo.photo} className="w-28 rounded-full"/>
                    <input type="file" onChange={onFileInputChange}/>
                </div>
                <div>
                    <div>
                        <div>
                            <label htmlFor="first_name" className="label">First name</label>
                            <input type="text"
                                id="first_name"
                                name="name"
                                value={commonInfo.name}
                                onChange={onChange}
                                className="input" placeholder="John"/>
                        </div>
                        <div>
                            <label htmlFor="last_name" className="label">Last name</label>
                            <input
                                type="text"
                                id="last_name"
                                className="input"
                                placeholder="Doe"
                                name="surname"
                                value={commonInfo.surname}
                                onChange={onChange}
                                required/>
                        </div>
                    </div>
                    
                    <label htmlFor="message" className="label">Summary</label>
                    <textarea
                        id="message"
                        rows="4"
                        className="textarea"
                        placeholder="Your summary..."
                        name="summary"
                        value={commonInfo.summary}
                        onChange={onChange}
                        ></textarea>

                </div>
                <button onClick={onSave}>Save</button>
           </div>)
        }
        </>
    )
}

export default CommonInfo