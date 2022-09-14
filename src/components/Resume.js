import React, { useState, useEffect } from 'react'
import ContactInformation from './ContactInformation'
import EducationList from './education/EducationList'
import { v4 as uuidv4} from 'uuid'
import { fakeResume } from '../services/fakeAuth'


const Resume = () => {

    const [ resume, setResumeInfo ] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const resumeResult = await fakeResume()
            setResumeInfo(resumeResult)
        }

        fetchData()
            .catch(console.error)
    }, [])

    const handleSaveContactInformation = (contactInformation) => {
        setResumeInfo({
            ...resume,
            contactInformation: contactInformation,
        })
    }

    const handleSaveEducation = (updatedEducation) => {
        if (!updatedEducation.id) {
            updatedEducation.id = uuidv4();
            setResumeInfo(prevResume => ({
                ...prevResume,
                educationList: [...prevResume.educationList, updatedEducation]
            }))
        }
        setResumeInfo(prevResume => ({
            ...prevResume,
            educationList: prevResume.educationList.map(education => {
                if (education.id === updatedEducation.id) {
                    console.log(updatedEducation.educationDates[0])
                    return {
                        ...education,
                        educationName: updatedEducation.educationName,
                        educationDates: updatedEducation.educationDates,
                        degree: updatedEducation.degree,
                    };
                }

                return education;
            })
        }))
    }

    return (
        <>
        <h2 className="text-center text-xl text-bold">Resume</h2>

        { !!resume.contactInformation && <ContactInformation
            savedContactInformation={resume.contactInformation}
            handleSave={handleSaveContactInformation}/>}

        { !!resume.educationList && <EducationList
            educationList={resume.educationList}
            handleSubmit={handleSaveEducation}/>}
        </>
    )
}

export default Resume