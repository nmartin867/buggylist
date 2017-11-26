import React from 'react'
import PropTypes from 'prop-types'

const EmptyResults = ({ onLoadClick }) => {
    return (<button onClick={onLoadClick}>Load Images</button>)
}

EmptyResults.propTypes = {
    onLoadClick: PropTypes.func.isRequired
}

export default EmptyResults
