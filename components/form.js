import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

export default function Form(item, key) {
    const handleChange = (e, key) => {
        const temp = result
        temp[key][e.target.name] = e.target.value
        updateResult(temp)
    }
    
    const postResults = (e, num) => {
        e.preventDefault()
        console.log(result[num])
    
        fetch('/api', {
          method: 'POST'
        })
          .then(res => res.json())
          .then(json => {
            console.log('POST (response):', json)
          })
    }

    return (
        <FormContainer>
            <input type="text" name="firstname" defaultValue={item.firstname} onChange={e => handleChange(e, key)}></input>
            <input type="text" name="lastname" defaultValue={item.lastname} onChange={e => handleChange(e, key)}></input>
            <button onClick={e => postResults(e, key)}>Update</button>
        </FormContainer>
    )
}

const FormContainer = styled.form`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-20px,-50%);

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