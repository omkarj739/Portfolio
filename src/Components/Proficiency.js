import React ,{useEffect,useRef} from 'react'
import lottie from "lottie-web"
import { makeStyles, withStyles } from '@material-ui/core/styles';
import "../Styles/Proficiency.css"
import LinearProgress from '@material-ui/core/LinearProgress';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({ offset: 240});

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 20,
        borderRadius: 10,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 0,
        backgroundColor: '#1a90ff',
    },
}))(LinearProgress);

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});


function Proficiency() {
    const classes = useStyles();

    const container = useRef(null);
    useEffect(()=>{
        lottie.loadAnimation({
            container:container.current,
            rendrer:'svg',
            loop:true,
            autoplay:true,
            animationData:require('../json/development.json')
        })
    },[])
    return (
        <div className="proficiency" id="proficiency" data-aos="fade-up">
            <div className="proficiency_left">
                <h1 className="proficiency_title">Proficiency</h1>
                <div className="progressbar" data-aos="fade-left">
                    <h3>Frontend / Design</h3>
                    <div className={classes.root}>
                        <BorderLinearProgress variant="determinate" value={75} />
                    </div>
                    <h3>Backend</h3>
                    <div className={classes.root}>
                        <BorderLinearProgress variant="determinate" value={55} />
                    </div>
                    <h3>Programming</h3>
                    <div className={classes.root}>
                        <BorderLinearProgress variant="determinate" value={60} />
                    </div>
                </div>
            </div>
            <div className="proficiency_right" data-aos="fade-right">
            <div className="pro_animation" ref={container}></div>
            </div>
        </div>
    )
}

export default Proficiency;
