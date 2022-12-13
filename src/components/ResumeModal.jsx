import React from 'react'
import '../styles/resume-modal.css'

import resume from '../assets/resume.pdf'

export default function ResumeModal({resumeModal, setResumeModal}){

    const handleCloseModal = () => {
        setResumeModal(false)
    }



  return (
    <div  className='modal'>
        <button className='modal-btn' onClick={handleCloseModal}>Close</button>
        <div className='resume-form'>
          <div>
          <h4>Download my Resume</h4>
            <a href={resume} className='resume-button'>Download</a>
          <h4>A letter of Recommendation</h4>
            <a className='resume-button'>Download</a>
          </div>
        </div>
    </div>
  )
}
