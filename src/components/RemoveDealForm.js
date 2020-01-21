import React from 'react'
import './RemoveDealForm.css'
import { useDispatch } from 'react-redux'
import { removeDeal } from '../actions';

const RemoveDealForm = ({ deal, closeModal }) => {
    const dispatch = useDispatch()
    return (
        <>

            <h2>Are you sure you want to remove the {deal.institution} -- {deal.dealType} deal?</h2>
            <form id="RemoveDealForm--button-container">
                <button id="RemoveDealForm--button" onClick={closeModal}>Cancel</button>
                <button id="RemoveDealForm--button" onClick={() => dispatch(removeDeal(deal.id))}>Remove</button>
            </form>
        </>)
}

export default RemoveDealForm