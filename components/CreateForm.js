import React, { useState, useContext } from 'react'
import ContentContext from '../context/ContentContext'
import styled from 'styled-components'

function CreateForm() {
    const context = useContext(ContentContext)
    const [firstname, updateFirstname] = useState('')
    const [lastname, updateLastname] = useState('')

    const acceptChange = (e) => {
        if(e.target.name === 'firstname') 
            updateFirstname(e.target.value)
        if(e.target.name === 'lastname') 
            updateLastname(e.target.value)
    }

    const handleCreate = (e) => {
        context.createResult(e, { firstname, lastname })
            .then((dbDidUpdate)=> {
                if(dbDidUpdate) {
                    updateFirstname('')
                    updateLastname('')
                }
            })
    }

    return (
        <ContentContext.Consumer>
            {context => (
                <FormContainer>
                    <input type="text" name="firstname" placeholder={`First Name`} value={firstname} onChange={e => acceptChange(e)}></input>
                    <input type="text" name="lastname" placeholder={`Last Name`} value={lastname} onChange={e => acceptChange(e)}></input>
                    <button onClick={e => handleCreate(e)}>Create</button>
                </FormContainer>
            )}
        </ContentContext.Consumer>
    )
}

export default CreateForm

const FormContainer = styled.form`
    margin: 20px 0 0 0;
    border-top: 1px solid rgba(0,0,0,.2);
    position: relative;
    text-align: right;
    padding: 20px 48px 0 0;

    input {
        border: none;
        border-bottom: 1px solid #2e69e1;
        background: none;
        margin-right: 10px;

        &:focus {
        outline: none;
        }
    }

    button {
        background: #2e69e1;
        color: white;
        border: 1px solid #2e69e1;
        font-family: "euclid-circular-a", sans-serif;
        font-size: 13px;
        letter-spacing: 1.42px;
        text-transform: uppercase;
        font-weight: 400;
        padding: 10px 20px;
        border-radius: 35px;
        transition: all .2s linear;

        &:hover {
          cursor: pointer;
          background: white;
          color: #2e69e1;
        }
          &:focus {
          outline: none;
        }
    }
`