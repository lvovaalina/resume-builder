import React, { useState, useEffect } from 'react'
import CommonInfo from './CommonInfo'
import { fakeResume } from '../services/fakeAuth';


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

    const handleSaveCommonInfo = (commonInfo) => {
        setResumeInfo({
            ...resume,
            commonInfo: commonInfo,
        })
    }

    return (
        <>
        <h2 className="text-center text-xl text-bold">Resume</h2>

        { !!resume.commonInfo && <CommonInfo
            savedCommonInfo={resume.commonInfo}
            handleSave={handleSaveCommonInfo}/>}
        </>
    )
}

export default Resume