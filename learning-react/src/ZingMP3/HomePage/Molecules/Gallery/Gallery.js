import React from 'react';
import GalleryItem from '../../Atoms/GalleryItem/GalleryItem';
import "./Gallerry.css";
class Gallery extends React.Component {
    render() {
        return (
            <>
            <div className="Gallery">
                <GalleryItem/>
                <GalleryItem/>
                <GalleryItem/>
            </div>
            </>
        );
    }
}

export default Gallery;