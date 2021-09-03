import './featured.scss'
import logostarwars from '../../assets/images/star-wars-logo.png'
import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import bghome from '../../assets/images/bg-starwars.jpg'
// import trailer from '../../assets/video/star-wars-trailer.mp4'

const Featured = () => {
    return (
        <div className="featured">
            <img src={bghome} alt=""/>    

            {/* <video autoPlay loop>
                <source type="video/mp4" src={trailer} />
            </video> */}

            <div className="info">
                <img src={logostarwars} alt="logo" />
                <span className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laudantium doloremque culpa consectetur sunt. At pariatur, vitae numquam sapiente similique, nobis dignissimos necessitatibus deserunt illo ad, iure rem ipsa tempora.
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>More Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
