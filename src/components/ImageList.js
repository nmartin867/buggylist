import React from 'react'
import PropTypes from 'prop-types'
import ImageItem from './ImageItem'

const ImageList = ({images, onLoadClick}) => (
    <div>
        {images.map((image, index) => (
            <ImageItem key={index} {...image} />
        ))}
    </div>
)

ImageList.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            title: PropTypes.string
        }).isRequired
    ).isRequired,
    onLoadClick: PropTypes.func.isRequired,
}

export default ImageList