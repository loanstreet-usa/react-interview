import React from 'react'
import Modal from 'react-modal';
import RemoveDealForm from './RemoveDealForm'
import './RemoveDealModal.css'
Modal.setAppElement('#root')

const RemoveDealModal = ({ deal, isOpen, closeModal }) => {

    return (<Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="RemoveDealModal--modal">
        <RemoveDealForm deal={deal} closeModal={closeModal} />
    </Modal>
    )
}

export default RemoveDealModal