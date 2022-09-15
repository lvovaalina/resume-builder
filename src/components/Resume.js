import React, { useState, useEffect } from 'react'
import ContactInformation from './ContactInformation'
import EducationList from './education/EducationList'
import WorkList from './work/WorkList'
import { v4 as uuidv4} from 'uuid'
import { fakeResume } from '../services/fakeAuth'


const Resume = () => {

    const [ resume, setResumeInfo ] = useState({
        workList: [],
        contactInformation: {},
        educationList: [],
    });

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
            return
        }
        setResumeInfo(prevResume => ({
            ...prevResume,
            educationList: prevResume.educationList.map(education => {
                if (education.id === updatedEducation.id) {
                    return {
                        ...education,
                        educationName: updatedEducation.educationName,
                        educationDates: updatedEducation.educationDates,
                        degree: updatedEducation.degree,
                    };
                }

                return education
            })
        }))
    }

    const handleSaveWork = (updatedWork) => {
        if (!updatedWork.id) {
            updatedWork.id = uuidv4();
            setResumeInfo(prevResume => ({
                ...prevResume,
                workList: [...prevResume.workList, updatedWork]
            }))
            console.log(resume);
            return
        }
        setResumeInfo(prevResume => ({
            ...prevResume,
            workList: prevResume.workList.map(work => {
                if (work.id === updatedWork.id) {
                    return {
                        ...work,
                        companyName: updatedWork.companyName,
                        dates: updatedWork.dates,
                        position: updatedWork.position,
                        description: updatedWork.description
                    };
                }

                return work;
            })
        }))
    }

    return (
        <>
        <h2 className="text-center text-xl text-bold">Resume</h2>

        <ContactInformation
            savedContactInformation={resume.contactInformation}
            handleSave={handleSaveContactInformation}/>

        <EducationList
            educationList={resume.educationList}
            handleSubmit={handleSaveEducation}/>

        <WorkList
            workList={resume.workList}
            onSubmitHandler={handleSaveWork}/>
        </>
    )
}

export default Resume