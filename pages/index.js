import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Form from '../components/Form'

function App() {
  const [result, updateResult] = useState([])

  const handleChange = (e, key) => {
    const temp = result
    temp[key][e.target.name] = e.target.value
    updateResult(temp)
  }

  const showResults = () => {
    return result.map((item, key) => {
      return (
        <div key={key} className="result">
          <span>{item.firstname} {item.lastname}</span>
          <form>
            <input type="text" name="firstname" defaultValue={item.firstname} onChange={e => handleChange(e, key)}></input>
            <input type="text" name="lastname" defaultValue={item.lastname} onChange={e => handleChange(e, key)}></input>
            <button onClick={e => postResults(e, key)}>Update</button>
          </form>

          {/* Will need Context APIs for this */}
          {/* {Form(item,key)} */}
        </div>
      )
    })
  }

  const getResults = () => {
    fetch('/api', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(json => {
        updateResult(json)
      })
  }

  const postResults = (e, num) => {
    e.preventDefault()

    fetch('/api', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(result[num])
    })
      .then(res => res.json())
      .then(json => {})
  }

  useEffect(()=> {
    getResults()
  }, [])

  return (
    <Div className="App">
      <Img src="/assets/yup-logo.png"/>
      <h1>Onsite Exercise</h1>
      <section id="results">
        {showResults()}
      </section>
    </Div>
  );
}

export default App;

const Div = styled.div`
  padding: 20px 40px;
  font-family: "post-grotesk-book", sans-serif;

  h1 {
    color: #2e69e1;
    font-weight: 400;
  }

  section {
    .result {
      max-height: 60px;
      min-height: 60px;
      position: relative;

      &:nth-child(2) {
        background: #8ed1fc;
      }

      span, form {
        position: absolute;
        top: 50%;
      }

      span {
        left: 0;
        transform: translate(20px,-50%)
      }

      form {
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
      }
    }

  }
`

const Img = styled.img`
  max-width: 100px;
  transform: translate(-8px,0);

`