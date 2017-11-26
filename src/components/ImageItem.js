import React from 'react'
import PropTypes from 'prop-types'

const ImageItem = ({url, title}) => {
    return <iframe src={url}></iframe>
}

ImageItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string
}

export default ImageItem
