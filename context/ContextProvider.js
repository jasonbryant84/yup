import React, { useState } from 'react'
import ContentContext from './ContentContext'

// Maybe use Reducer
export default function ContextProvider(props) {
    // Set State
    const [result, updateResultState] = useState([])
    const [updatesMade, incrementUpdatesMade] = useState(0)

    // API Calls
    const createResult = async (e, obj) => {
        e.preventDefault()
    
        return await fetch('/api', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(res => res.json())
            .then(json => {
                const lastRow = json[0]
                // do this by status
                if(lastRow) {
                    updateResultState([...result, lastRow])
                    incrementUpdatesMade(updatesMade + 1)
                    return true
                }
            })
            .catch(()=> {
                return false
            })
    },
    readResults = () => {
        fetch('/api', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(json => {
                updateResultState(json)
            })
    }, 
    putResult = (e, num) => {
        e.preventDefault()
    
        fetch('/api', {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(result[num])
        })
          .then(res => res.json())
          .then(json => {
            if(json && json.changedRows >= 1) {
              incrementUpdatesMade(updatesMade + 1)
            }
          })
    }, 
    deleteResult = (num) => {    
        fetch('/api', {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(result[num])
        })
          .then(res => res.json())
          .then(json => {
            const temp = [...result.slice(0,num), ...result.slice(num+1)]
            updateResultState(temp)
          })
    }

    // Return Value
    const value = {
        result,
        createResult,
        readResults,
        putResult,
        deleteResult,
        updateResultState
    }

    return (
        <ContentContext.Provider value={value}>
            {props.children}
        </ContentContext.Provider>
    )
}