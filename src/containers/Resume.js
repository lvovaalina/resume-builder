import React, { useState, useEffect, useCallback } from 'react'
import ContactInformation from '../components/ContactInformation'
import List from '../components/List'
import { v4 as uuidv4} from 'uuid'
import { fakeResume } from '../services/fakeAuth'
import EducationItem from '../components/EducationItem'
import EducationForm from '../components/EducationForm'
import WorkItem from '../components/WorkItem'
import WorkForm from '../components/WorkForm'
import SkillItem from '../components/SkillItem'
import SkillForm from '../components/SkillForm'

const ResumeContainer = () => {

    const [education, setEducation] = useState([])
    const [work, setWork] = useState([])
    const [contactInformation, setContactInformation] = useState({})
    const [skills, setSkills] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const resumeResult = await fakeResume()
            setEducation(resumeResult.educationList || [])
            setWork(resumeResult.workList || [])
            setSkills(resumeResult.skillList || [])

            setContactInformation(resumeResult.contactInformation || {
                name: '',
                surname: '',
                summary: '',
                photo: null,
            })
        }

        fetchData()
            .catch(console.error)
    }, [])

    const handleSaveContactInformation = useCallback((contactInformation) => {
        setContactInformation(contactInformation)
    }, [])

    const handleSaveEducation = useCallback((savedEducation) => {
        let tempEducationList = education
        if (!savedEducation.id) {
            savedEducation.id = uuidv4()
            tempEducationList = [...education, savedEducation]
        } else {
            tempEducationList = tempEducationList.map(education => {
                if (education.id === savedEducation.id) {
                    return savedEducation
                }

                return education
            })
        }
        setEducation(tempEducationList)
    }, [education])

    const handleSaveSkill = useCallback((savedSkill) => {
        let tempSkillList = skills;
        if (!savedSkill.id) {
            savedSkill.id = uuidv4();
            tempSkillList = [...tempSkillList, savedSkill]
        } else {
            tempSkillList = tempSkillList.map(skill => {
                if (skill.id === savedSkill.id) {
                    return savedSkill
                }
                return skill
            })
        }
        setSkills(tempSkillList)
    }, [skills])

    const handleSaveWork = useCallback((savedWork) => {
        let tempWorkList = work
        if (!savedWork.id) {
            savedWork.id = uuidv4();
            tempWorkList = [...tempWorkList, savedWork]
        } else {
            tempWorkList = tempWorkList.map(work => {
                if (work.id === savedWork.id) {
                    return savedWork
                }

                return work
            })
        }

        setWork(tempWorkList)        
    }, [work])

    return (
        <>
            <ContactInformation
                savedContactInformation={contactInformation}
                handleSave={handleSaveContactInformation}/>

            <List
                listName="Education"
                list={education}
                handleSubmit={handleSaveEducation}
                ListItem={EducationItem}
                ListForm={EducationForm}
             />

            <List
                listName="Work Expirience"
                list={work}
                handleSubmit={handleSaveWork}
                ListItem={WorkItem}
                ListForm={WorkForm}
             />

            <List
                listName="Skills"
                list={skills}
                handleSubmit={handleSaveSkill}
                ListItem={SkillItem}
                ListForm={SkillForm}
             />
        </>
    )
}

export default ResumeContainer