import React, {useState, useEffect} from 'react'
import loadingImg from "../Media/logo.svg"
import "./ImageGallery.css"
import { useQuery } from '@tanstack/react-query'
import { AiOutlineCloseCircle, AiOutlinePicture } from 'react-icons/ai'
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline, IoHeartOutline, IoLayersOutline, IoLocationOutline } from 'react-icons/io5'

export default function ImageGallery({imgData, floorplan, myimagestate, setimagestate, cords }) {

    // COMBINES REGULAR IMAGES AND FLOOR PLAN INTO ONE ARRAY
    const fixed = [
        ...imgData,
        {
            url: floorplan
        }
    ]
    // LENGTH OF ARRAY
    let galleryLength = fixed.length
    // console.log("GalleryLength: ", galleryLength)

    // PAGENATION FOR GALLERY
    const [currentPage, setCurrentPage] = useState(0);

    // GOOGLEMAPS
    const [mapsStatus, setMapsStatus] = useState(false);


    useEffect(() => {
        // console.log("Currentpage: ", currentPage)
        // console.log("Total page: ", galleryLength)
        // console.log("Cords: ", cords.lat, cords.long)
    }, [currentPage]);

    // FETCH
    const { isError, isLoading, data } = useQuery(["image", currentPage], () => {
        return fetch(fixed[currentPage].url).then(response => response.blob())
    })


    // FUNCTION FOR SWITCHING IMAGE IN GALLERY
    const imageHandler = (e) => {
        let arrowType = e.target.classList

        if (arrowType[0] === "imagegallery__left__overlay") {
            if (currentPage > 0) {
                setCurrentPage(currentPage - 1)
            }
        }
        if (arrowType[0] === "imagegallery__right__overlay") {
            if (currentPage < galleryLength - 1) {
                setCurrentPage(currentPage + 1)
            }
        }
        else {
            console.log("Something went wrong")
        }
    }

    const galleryFunctionPictures = () => {
        if (mapsStatus === true) {
            setMapsStatus(false)
        }
        setCurrentPage(0)
    }
    const galleryFunctionFloorplan = () => {
        if (mapsStatus === true) {
            setMapsStatus(false)
        }
        setCurrentPage(galleryLength - 1)
    }
    const galleryFunctionClose = () => {
        if (mapsStatus === true) {
            setMapsStatus(false)
        }
        setimagestate("imgHide")
    }
    const galleryFunctionMap = () => {
        if (mapsStatus === false) {
            setMapsStatus(true)
        }
        if (mapsStatus === true) {
            setMapsStatus(false)
        }
    }
    const galleryFunction = () => {

    }
    

    
    if (isError) {
        return (
            // House Pictures (ERROR)
            <section id={myimagestate} className='imagegallery'>
                <div className="imagegallery__left">
                    <IoArrowBackCircleOutline />
                </div>
                <div className="imagegallery__mid">
                    <h1 style={{textAlign: "center"}}>Something went wrong, try again</h1>
                    <div className="imagegallery__mid__choices">
                        <AiOutlinePicture className='choices__pictures' onClick={galleryFunctionPictures} />
                        <IoLayersOutline className='choices__floorplan' onClick={galleryFunctionFloorplan} />
                        <AiOutlineCloseCircle className='choices__close' onClick={galleryFunctionClose} />
                        <IoLocationOutline className='choices__map' onClick={galleryFunctionMap} />
                        <IoHeartOutline className='choices__like' />
                    </div>
                </div>
                <div className="imagegallery__right">
                    <IoArrowForwardCircleOutline />
                </div>
            </section>
        )    
    }
    if (isLoading) {
        return (
            // House Pictures (LOADING)
            <section id={myimagestate} className='imagegallery'>
                <div className="imagegallery__left">
                    <IoArrowBackCircleOutline />
                </div>
                <div className="imagegallery__mid">
                    <img src={loadingImg} style={{maxHeight: "45vw"}} alt="" />
                    <div className="imagegallery__mid__choices">
                        <AiOutlinePicture className='choices__pictures' onClick={galleryFunctionPictures} />
                        <IoLayersOutline className='choices__floorplan' onClick={galleryFunctionFloorplan} />
                        <AiOutlineCloseCircle className='choices__close' onClick={galleryFunctionClose} />
                        <IoLocationOutline className='choices__map' onClick={galleryFunctionMap} />
                        <IoHeartOutline className='choices__like' />
                    </div>
                </div>
                <div className="imagegallery__right">
                    <IoArrowForwardCircleOutline />
                </div>
            </section>
        )
    }
    if (data) {
        if (mapsStatus === false) {
            return (
                // House Pictures
                <section id={myimagestate} className='imagegallery'>
                    <div className="imagegallery__left">
                        <div className="imagegallery__left__overlay" onClick={imageHandler}></div>
                        <IoArrowBackCircleOutline style={{placeSelf: "center"}} className="imagegallery__left__icon" />
                    </div>
                    <div className="imagegallery__mid">
                        <img src={URL.createObjectURL(data)} style={{maxHeight: "45vw"}} alt="" />
                        <div className="imagegallery__mid__choices">
                            <AiOutlinePicture className='choices__pictures' onClick={galleryFunctionPictures} />
                            <IoLayersOutline className='choices__floorplan' onClick={galleryFunctionFloorplan} />
                            <AiOutlineCloseCircle className='choices__close' onClick={galleryFunctionClose} />
                            <IoLocationOutline className='choices__map' onClick={galleryFunctionMap} />
                            <IoHeartOutline className='choices__like' />
                        </div>
                    </div>
                    <div className="imagegallery__right">
                    <div className="imagegallery__left__overlay"></div>
                        <div className="imagegallery__right__overlay" onClick={imageHandler}></div>
                        <IoArrowForwardCircleOutline style={{placeSelf: "center"}} className="imagegallery__right__icon" />
                    </div>
                </section>
            )
        }
        if (mapsStatus === true) {
            return (
                // House Pictures
                <section id={myimagestate} className='imagegallery'>
                    <div className="imagegallery__left">
                        <div className="imagegallery__left__overlay" onClick={imageHandler}></div>
                        <IoArrowBackCircleOutline style={{placeSelf: "center"}} className="imagegallery__left__icon" />
                    </div>
                    <div className="imagegallery__mid">
                        <iframe
                        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d${cords.lat}!2d${cords.long}!3d${cords.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sda!2sdk!4v1684087959995!5m2!1sda!2sdk&zoom=18&maptype=satellite`}
                        style={{width: "600px", height: "450px"}}
                        allowFullScreen={true}
                        loading="lazy"></iframe>
                        <div className="imagegallery__mid__choices">
                            <AiOutlinePicture className='choices__pictures' onClick={galleryFunctionPictures} />
                            <IoLayersOutline className='choices__floorplan' onClick={galleryFunctionFloorplan} />
                            <AiOutlineCloseCircle className='choices__close' onClick={galleryFunctionClose} />
                            <IoLocationOutline className='choices__map' onClick={galleryFunctionMap} />
                            <IoHeartOutline className='choices__like' />
                        </div>
                    </div>
                    <div className="imagegallery__right">
                    <div className="imagegallery__left__overlay"></div>
                        <div className="imagegallery__right__overlay" onClick={imageHandler}></div>
                        <IoArrowForwardCircleOutline style={{placeSelf: "center"}} className="imagegallery__right__icon" />
                    </div>
                </section>
            )
        }
        


        // return (
        //     // House Pictures
        //     <section id={myimagestate} className='imagegallery'>
        //         <div className="imagegallery__left">
        //             <div className="imagegallery__left__overlay" onClick={imageHandler}></div>
        //             <IoArrowBackCircleOutline style={{placeSelf: "center"}} className="imagegallery__left__icon" />
        //         </div>
        //         <div className="imagegallery__mid">
        //             <iframe
        //             src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d${cords.lat}!2d${cords.long}!3d${cords.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sda!2sdk!4v1684087959995!5m2!1sda!2sdk&zoom=18&maptype=satellite`}
        //             style={{width: "600px", height: "450px"}}
        //             allowFullScreen={true}
        //             loading="lazy"></iframe>
        //             <div className="imagegallery__mid__choices">
        //                 <AiOutlinePicture className='choices__pictures' onClick={galleryFunctionPictures} />
        //                 <IoLayersOutline className='choices__floorplan' onClick={galleryFunctionFloorplan} />
        //                 <AiOutlineCloseCircle className='choices__close' onClick={galleryFunctionClose} />
        //                 <IoLocationOutline className='choices__map' onClick={galleryFunctionMap} />
        //                 <IoHeartOutline className='choices__like' />
        //             </div>
        //         </div>
        //         <div className="imagegallery__right">
        //         <div className="imagegallery__left__overlay"></div>
        //             <div className="imagegallery__right__overlay" onClick={imageHandler}></div>
        //             <IoArrowForwardCircleOutline style={{placeSelf: "center"}} className="imagegallery__right__icon" />
        //         </div>
        //     </section>
        // )
    }
}