import React, { Fragment, useContext, useState } from 'react'
import styled from 'styled-components'
import ContentContext from '../context/ContentContext'
import Close from '../assets/svgs/close'
import Trophy from '../assets/svgs/trophy'
import Messenger from '../components/Messenger'

function Index() {
    const context = useContext(ContentContext),
        [showResultsFlag, updateShowResultsFlag] = useState(false),
        [username, setUsername] = useState('Jason')

    const handleClick = () => {
        context.readResults()
        updateShowResultsFlag(true)
    }

    const showResults = () => {
        return context.result.map((item, key) => {
            item['key'] = key
            return (
                <Txt key={key} id={item.sender}>
                    <span className={`result ${username !== item.sender ? 'received' : 'sent'}`}>{item.text}</span>
                </Txt>
            )
        })
    }

    return (
        <ContentContext.Consumer>
            {context => (
                <Div className="App">
                    <Img src="/assets/img/yup-logo.png"/>
                    <h1>Onsite Exercise <span id="get-request" onClick={handleClick}>Get Results</span></h1>
                    <Widget id="widget">
                        <Heading>
                            <Close /> 
                            <h6 id="name">Mr. Smith</h6>
                            <span id="status">Online</span>
                            <Trophy/>
                        </Heading>
                        <Messages>
                            { showResultsFlag && (
                                <Fragment>
                                    <span className="start-time">9:43am</span>
                                    <span className="session-with">Session started with Mr. Smith</span>
                                    {showResults()}
                                </Fragment>
                            )}
                        </Messages>
                        <Messenger/>
                    </Widget>
                </Div>
            )}
        </ContentContext.Consumer>
    )
}

export default Index

const Widget = styled.section`
    position: fixed;
    border: 1px solid rgba(0,0,0,.2);
    bottom: 10px;
    left: 10px;
    width: 300px;
    height: 500px;
    box-shadow: 3px 3px 3px rgba(0,0,0,.1);
`

const Heading = styled.section`
    position: relative;
    padding: 6px;
    text-align: center;
    margin: 0;
    background: #f9f9f9;
    border-bottom: 1px solid rgba(0,0,0,.2);

    h6#name {
        margin: 0 0 0 0;
        text-transform: uppercase;
        letter-spacing: .1em;
        font-weight: 400;
        
        &::after {
            border-style: solid;
            border-width: 0.17em 0.17em 0 0;
            content: '';
            display: inline-block;
            height: 0.30em;
            left: .8em;
            position: relative;
            top: 0.15em;
            vertical-align: top;
            width: 0.30em;
            top: 2px;
            transform: rotate(135deg);
        }
    }
    span#status {
        font-size: 10px;
    }

    #close-svg {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(10px,-50%);
    }

    #trophy-svg {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(-10px,-50%);
    }
`

const Messages = styled.section`
    display: flex;
    flex-direction: column;
    background: white;
    padding: 20px;
    z-index: 1;
    overflow-x: hidden;
    overflow-y: scroll;
    height: calc(100% - 118px);

    & > * {
        padding: 4px 10px;
        font-size: 12px;
    }

    span {
        position: relative; 

        &.start-time, &.session-with {
            text-align: center;
        }

        &.start-time {
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: .1em;
            background: white;

            &::before {
                content: '';
                position: absolute;
                width: 50%;
                height: 1px;
                background: rgba(0,0,0,.1);
                top: 50%;
                left: -35px;
            }
            &::after {
                content: '';
                position: absolute;
                width: 50%;
                height: 1px;
                background: rgba(0,0,0,.1);
                top: 50%;
                right: -35px;
            }
        }

        &.session-with {
            color: #2e69e1;
            margin-bottom: 10px;
            font-size: 10px;
        }
    }
`

const Txt = styled.div`
    position: relative;
    margin: 0 0 3px 0;

    span {
        display: inline-block;
        position: relative;
        max-width: 80%;
        border-radius: 5px;
        border-bottom-right-radius: 0;
        background: #2e69e1;
        color: white;
        padding: 6px 12px;
        line-height: 1.5;

        &.received {
            left: 10px;
            border-radius: 5px;
            border-bottom-left-radius: 0;
            background: #eeeeee;
            color: #666666;

            &::before {
                position: absolute;
                content: '';
                height: 25px;
                width: 25px;
                border-radius: 13px;
                display: block;
                bottom: -20px;
                left: -30px;
                background: url(assets/img/batman.png) no-repeat center center;
                background-size: cover;
            }
        }

        &.sent {
            float: right;
        }
    }
`


///

const Img = styled.img`
    max-width: 100px;
    transform: translate(-8px,0);
`

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

    #get-request {
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
           

        }
    }
`