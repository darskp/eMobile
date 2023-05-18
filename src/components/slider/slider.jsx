import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { sliderData } from "./sliderdata";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useEffect, useState } from 'react';
import { Card, CardMedia } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    leftIcon: {
        color: theme.palette.warning.dark,
        position: "absolute",
        fontSize: '2rem',
        top: "45%",
        left: "5%",
        [theme.breakpoints.down('md')]: {
            backgroundColor: theme.palette.secondary.main,
        },
    },

    rightIcon:{
        color: theme.palette.warning.dark,
        position: "absolute", 
        top: "45%", 
        fontSize: '2rem',
        left: "90%"
    }

}));
const Slider = () => {
    const [currentSlide, setSlide] = useState(0);
    const sliderLength = sliderData.length;
    let nextSlide = () => {
        setSlide(currentSlide == sliderLength - 1 ? 0 : currentSlide + 1)
    }
    let preSlide = () => {
        setSlide(currentSlide == 0 ? sliderLength - 1 : currentSlide - 1)
    }
    let interval = 5000;
    const autoScroll = true;
    let setIn;

    useEffect(() => {
        setSlide(0);
    }, [])

    let auto = () => {
        setIn = setInterval(nextSlide, interval);
    }

    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(setIn)
    }, [currentSlide])

    const classes = useStyles();



    return (<>

        <layout style={{ display: "flex", position: "relative" }}>
            <ArrowCircleLeftIcon className={classes.leftIcon} onClick={preSlide} />
            <div>
                {
                    sliderData.map((data, index) => {
                        return (
                            <div key={index}>
                                {index == currentSlide && (<>
                                    <Card sx={{ width: 1350 }} className={classes.card}>
                                        <CardMedia
                                        className={classes.card}
                                            sx={{ height: 420 }}
                                            image={data.image}
                                            title={data.heading}
                                        />
                                    </Card>
                                </>)}
                            </div>
                        )
                    })
                }
            </div>
            <ArrowCircleRightIcon className={classes.rightIcon} onClick={nextSlide} />
        </layout>
    </>);
}

export default Slider;