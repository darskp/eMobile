import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { sliderData } from "./sliderdata";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useState } from 'react';
import {Card,CardMedia} from '@mui/material';

const Slider = () => {
    const [currentSlide,setSlide]=useState(0);
    const sliderLength=sliderData.length;
let nextSlide=()=>{
    setSlide(currentSlide == sliderLength - 1?0:currentSlide+1)
}
let preSlide=()=>{
    setSlide(currentSlide == sliderLength - 1?0:currentSlide-1)
}
    return (<>
        <layout style={{display:"flex"}}>
            <ArrowCircleLeftIcon onClick={preSlide}/>
            {
                sliderData.map((data,index)=>{
            return(
            <div key={index}>
                {index==currentSlide && (<>
                        <Card sx={{width:530}}>
                            <CardMedia
                                sx={{ height: 240 }}
                                image={data.image}
                                title={data.heading}
                            />
                            </Card>
                </>)}
            </div>
            )
            })
            }
            <ArrowCircleRightIcon onClick={nextSlide} />
        </layout>
    </>);
}

export default Slider;