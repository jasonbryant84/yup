import React, { useState, useContext } from 'react'
import ContentContext from '../context/ContentContext'
import styled from 'styled-components'
import Camera from '../assets/svgs/camera'

function Messenger() {
    const context = useContext(ContentContext)
    const [textMsg, updateTxtMsg] = useState('')

    const acceptChange = (e) => {
        updateTxtMsg(e.target.value)
    }

    const handleSend = (e) => {
        context.createResult(e, { textMsg })
            .then((dbDidUpdate)=> {
                if(dbDidUpdate) {
                    updateTxtMsg('')
                }
            })
    }

    return (
        <ContentContext.Consumer>
            {context => (
                <Wrapper>
                    <Camera/>
                    <FormContainer id="message-input">
                        <input type="text" name="text-msg" value={textMsg} onChange={e => acceptChange(e)} placeholder={`Type a message...`}></input>
                        <button onClick={e => handleSend(e)}>Send</button>
                    </FormContainer>
                </Wrapper>
            )}
        </ContentContext.Consumer>
    )
}

export default Messenger

const Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: white;
    z-index: 2;

    #camera-svg {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(10px, -50%);
        z-index: 1;
    }
`

const FormContainer = styled.form`
    position: relative;
    text-align: right;
    border-top: 1px solid rgba(0,0,0,.2);
    padding: 5px;

    input {
        font-size: 13px;
        border: 1px solid rgba(0,0,0,.2);
        background: none;
        margin-right: 10px;
        border-radius: 20px;
        padding: 5px 15px;

        &:focus {
            outline: none;
        }
    }

    button {
        background: none;
        color: grey;
        border: none;
        font-family: "euclid-circular-a", sans-serif;
        font-size: 13px;
        letter-spacing: 1.42px;
        text-transform: uppercase;
        font-weight: 400;
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