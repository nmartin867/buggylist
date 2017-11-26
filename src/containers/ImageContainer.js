import {connect} from 'react-redux'
import ImageList from '../components/ImageList'
import {fetchImages} from '../actions'

const mapStateToProps = state => {
    return {
        images: state.images
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadClick: () => dispatch(fetchImages())
    }
}

const ImageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageList)

export default ImageContainer