import React, { useState } from 'react'
import { BsPersonCircle } from 'react-icons/bs'

const ContactInformation = ({ savedContactInformation, handleSave }) => {
    const [ contactInformation, setContactInformation ] = useState({
        edit: false,
        photo: null,
        name: '',
        surname: '',
        summary: '',
    })

    const handleEdit = () => {
        setContactInformation({
            name: savedContactInformation.name,
            surname: savedContactInformation.surname,
            summary: savedContactInformation.summary,
            photo: savedContactInformation.photo,
            edit: true,
        })
    }

    const onSave = () => {
        handleSave({
            photo: contactInformation.photo,
            summary: contactInformation.summary,
            name: contactInformation.name,
            surname: contactInformation.surname,
        });

        setContactInformation({
            name: '',
            surname: '',
            summary: '',
            photo: '',
            edit: false,
        })
    }

    const onChange = (e) => {
        setContactInformation({
            ...contactInformation,
            [e.target.name]: e.target.value,
        })
    }

    const onFileInputChange = (e) => {
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
 
        reader.onload = (e) => {
            setContactInformation({
                ...contactInformation,
                photo: e.target.result,
            })
        }
    }

    return (
        <>
        <h2 className="text-3xl my-0">Contact Information</h2>
        { !contactInformation.edit ? (
            <div className="flex my-8 justify-between">
                <div className="flex flex-row">
                    <div className="w-28 mr-4">
                    {!savedContactInformation.photo ? (<BsPersonCircle className='text-4xl' />)
                    : (<img
                        src={savedContactInformation.photo}
                        className="w-28 rounded-full"
                        alt="Resume shot" />)}
                    </div>
                    <div className="flex flex-col">
                        <div className="font-bold">{savedContactInformation.name} {savedContactInformation.surname}</div>
                        <div>imlvovaalina@gmail.com</div>
                        <div className="max-w-2xl">{savedContactInformation.summary}</div>
                    </div>
                </div>
                <button className="outline-button h-14" onClick={handleEdit}>Edit</button>
           </div>)
        : (
            <div className="flex justify-around">
                <div>
                    <img src={contactInformation.photo} className="w-28 rounded-full"/>
                    <label htmlFor="image-upload" className="label">Upload image:</label>
                    <input 
                        type="file"
                        id="image-upload"
                        className="file-input"
                        accept="image/png, image/jpeg"
                        onChange={onFileInputChange}/>
                </div>
                <div>
                    <div>
                        <div>
                            <label htmlFor="first_name" className="label">First name</label>
                            <input type="text"
                                id="first_name"
                                name="name"
                                value={contactInformation.name}
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
                                value={contactInformation.surname}
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
                        value={contactInformation.summary}
                        onChange={onChange}
                        ></textarea>
                </div>
                <button className="button" onClick={onSave}>Save</button>
           </div>)
        }
        </>
    )
}

export default ContactInformation