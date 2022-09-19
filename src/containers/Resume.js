import React, { useState, useEffect } from 'react'
import ContactInformation from '../components/ContactInformation'
import EducationList from '../components/EducationList'
import WorkList from '../components/WorkList'
import { v4 as uuidv4} from 'uuid'
import { fakeResume } from '../services/fakeAuth'
import SkillList from '../components/SkillList'


const ResumeContainer = () => {

    const [ resume, setResumeInfo ] = useState({
        workList: [],
        contactInformation: {},
        educationList: [],
        skillList: [],
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
            setResumeInfo({
                ...resume,
                educationList: [...resume.educationList, updatedEducation]
            })
            return
        }
        setResumeInfo({
            ...resume,
            educationList: resume.educationList.map(education => {
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
        })
    }

    const handleSaveSkill = (updatedSkill) => {
        if (!updatedSkill.id) {
            updatedSkill.id = uuidv4();
            setResumeInfo({
                ...resume,
                skillList: [...resume.skillList, updatedSkill]
            })
            return
        }
        setResumeInfo({
            ...resume,
            skillList: resume.skillList.map(skill => {
                if (skill.id === updatedSkill.id) {
                    return {
                        ...skill,
                        name: updatedSkill.name,
                        level: updatedSkill.level,
                    };
                }

                return skill;
            })
        })
    }

    const handleSaveWork = (updatedWork) => {
        if (!updatedWork.id) {
            updatedWork.id = uuidv4();
            setResumeInfo({
                ...resume,
                workList: [...resume.workList, updatedWork]
            })
            console.log(resume);
            return
        }
        setResumeInfo({
            ...resume,
            workList: resume.workList.map(work => {
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
        })
    }

    return (
        <>
            <ContactInformation
                savedContactInformation={resume.contactInformation}
                handleSave={handleSaveContactInformation}/>

            <EducationList
                educationList={resume.educationList}
                handleSubmit={handleSaveEducation}/>

            <WorkList
                workList={resume.workList}
                onSubmitHandler={handleSaveWork}/>

            <SkillList
                skillList={resume.skillList}
                onSubmitHandler={handleSaveSkill}/>
        </>
    )
}

export default ResumeContainer