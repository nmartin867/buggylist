import React from 'react'
import PropTypes from 'prop-types'

const ImageItem = (url, title) => {
    return <img src={url} alt={title}/>
}

ImageItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string
}

export default ImageItem
