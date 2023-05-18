import Slider from '../../components/slider/slider';
import './home.module.scss'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
const Home = () => {
    return (
        <div style={{marginTop:"10px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
            <Slider/>
        </div>
    );
}
export default Home;