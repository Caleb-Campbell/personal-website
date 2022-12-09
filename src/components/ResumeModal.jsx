import React from 'react'
import '../styles/resume-modal.css'

export default function ResumeModal({resumeModal, setResumeModal}){

    const handleCloseModal = () => {
        setResumeModal(false)
    }

  return (
    <div className='modal'>
        <button className='modal-btn' onClick={handleCloseModal}>Close</button>
        <div className='resume-form'>
            
        </div>
    </div>
  )
}
