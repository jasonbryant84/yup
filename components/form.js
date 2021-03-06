import React, { useEffect, useState, useContext } from 'react'
import ContentContext from '../context/ContentContext'
import RemoveButton from './RemoveButton'
import styled from 'styled-components'
import PropTypes from 'prop-types'

function Form(props) {
  const context = useContext(ContentContext)
  const [firstname, updateFirstname] = useState(props.data.firstname)
  const [lastname, updateLastname] = useState(props.data.lastname)

  const acceptChange = (e) => {
    if(e.target.name === 'firstname') {
        updateFirstname(e.target.value)

    } else if(e.target.name === 'lastname') { 
        updateLastname(e.target.value)
    }

    const temp = context.result
    temp[props.data.key][e.target.name] = e.target.value
    context.updateResultState(temp)
  }

  useEffect(()=> {
    
  },[context.result])

  return (
    <ContentContext.Consumer>
      {context => (
        <FormContainer data-num={props.data.key}>
            <input type="text" name="firstname" value={firstname} onChange={e => acceptChange(e)}></input>
            <input type="text" name="lastname" value={lastname} onChange={e => acceptChange(e)}></input>
            <button onClick={e => context.putResult(e, props.data.key)}>Update</button>
            <RemoveButton num={props.data.key} />
        </FormContainer>
      )}
    </ContentContext.Consumer>
  )
}

export default Form

Form.propTypes = {
  data: PropTypes.object.isRequired
}
Form.defaultProps = {
  data: {
    firstname: 'John',
    lastname: 'Doe'
  }
}

const FormContainer = styled.form`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50px,-50%);

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