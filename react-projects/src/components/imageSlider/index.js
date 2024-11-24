import { useState,useEffect } from "react";
import { BsArrowLeftCircleFill,BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

const ImageSlider = ({url,limit=5,page=1}) => {
    const [images,setImages] = useState([]);
    const [error,setError] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchImages(){
        try{
            setIsLoading(true);
            const data = await fetch(`${url}?page=${page}&limit=${limit}`);
            const json = await data.json();
            if (json) {
                console.log(json);
                setImages(json);
                setIsLoading(false);
            }
        } catch(e){
            setIsLoading(false);
            setError(e.message);
        }
    }
    useEffect(() => {
        if (url !== "") fetchImages(url);
      }, [url]);

    if (isLoading){
        return (
            <div>
                Loading...! fetching data! please wait...
            </div>
        )
    }

    if (error !== null){
        return (
            <div>
                {window.alert(error)}
            </div>
        )
    }

    return (
        <div className="container">
            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={()=> setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)}/>
            {
                images && images.length > 0 ?
                images.map((image,index)=>(
                    <img src= {image.download_url} key={image.id}className={currentSlide === index ? "current-image" : "hide-current-image"} alt={image.download_url} />
                )) : null

            }
            <BsArrowRightCircleFill className="arrow arrow-right" onClick={()=> setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)}/>
            <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>  
        </div>
    )
}
export default ImageSlider;