import React from 'react'
import PropTypes from 'prop-types'
import ImageItem from './ImageItem'
import EmptyReslts from './EmptyResults'

const ImageList = ({images, onLoadClick}) => {
    if (images.length === 0) {
        return <EmptyReslts onLoadClick={ onLoadClick }/>
    } else {
        return (
            <div>
                {images.map((image, index) => (
                    <ImageItem key={index} {...image} />
                ))}
            </div>
        )
    }
}


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