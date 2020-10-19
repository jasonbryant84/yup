import React, { useContext } from 'react'
import Remove from '../assets/svgs/remove'
import ContentContext from '../context/ContentContext'
import styled from 'styled-components'
import PropTypes from 'prop-types'

function RemoveButton(props) {
  const context = useContext(ContentContext)

  const handleClick = () => {
    context.deleteResult(props.num)
  }

  return (
        <ContentContext.Consumer>
            {context => (
                <RemoveWrapper onClick={handleClick}>
                    <Remove />
                </RemoveWrapper>
            )}
        </ContentContext.Consumer>
    )
}

export default RemoveButton

RemoveButton.propTypes = {
    num: PropTypes.number
}
RemoveButton.defaultProps = {
    num: 100
}

const RemoveWrapper = styled.div`
    position: absolute;
    right: -30px;
    top: 50%;
    transform: translate(0, -50%);
`
  
  