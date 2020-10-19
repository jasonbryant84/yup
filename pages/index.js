import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import ContentContext from '../context/ContentContext'
import Form from '../components/Form'
import CreateForm from '../components/CreateForm'

function Index() {
    const context = useContext(ContentContext),
        [showResultsFlag, updateShowResultsFlag] = useState(false)

    const handleClick = () => {
        context.readResults()
        updateShowResultsFlag(true)
    }

    const showResults = () => {
        return context.result.map((item, key) => {
            item['key'] = key
            return (
                <div key={key} className="result">
                    <span>{item.firstname} {item.lastname}</span>
                    <Form data={item} />
                </div>
            )
        })
    }

    return (
        <ContentContext.Consumer>
            {context => (
                <Div className="App">
                    <Img src="/assets/img/yup-logo.png"/>
                    <h1>Onsite Exercise <span id="get-request" onClick={handleClick}>Get Results</span></h1>
                    <section id="results">
                        { showResultsFlag && showResults()}
                        { showResultsFlag && <CreateForm /> }
                    </section>
                </Div>
            )}
        </ContentContext.Consumer>
    )
}

export default Index;

const Div = styled.div`
    padding: 20px 40px;
    font-family: "post-grotesk-book", sans-serif;

    h1 {
        position: relative;
        color: #2e69e1;
        font-weight: 400;

        #get-request {
            position: absolute;
            transform: translate(20px, 0);
            background: #ffd50d;
            border: 1px solid #ffd50d;
            color: #1a1919;
            font-weight: 600;

            &:hover {
                box-shadow: 1px 1px 3px rgba(0,0,0,.5);
                background: #ffd50d;
                border: 1px solid #ffd50d;
                color: #1a1919;
            }
        }
    }

    button, #get-request {
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

    section {
        .result {
            max-height: 60px;
            min-height: 60px;
            position: relative;

            &:nth-child(even) {
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

        }
    }
`

const Img = styled.img`
    max-width: 100px;
    transform: translate(-8px,0);
`