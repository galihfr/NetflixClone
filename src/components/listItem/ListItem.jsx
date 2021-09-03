import './listItem.scss'
import React, { useState } from 'react';
import cardwatching from '../../assets/images/bg-card.jpg';
import { Add, FiberManualRecordRounded, KeyboardArrowDownOutlined, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import trailer from '../../assets/video/star-wars-trailer.mp4'

const ListItem = ({index}) => {
    const [isHovered, setIsHovered] = useState(false);  
    return (
        <div 
            className="list-item"
            style={{left: isHovered && index * 225 - 50 + index * 2.5}}
            onMouseEnter={()=> setIsHovered(true)}
            onMouseLeave={()=> setIsHovered(false)}
        >
            <img src={cardwatching} alt="" />
            {isHovered && (
                <>
                    <video autoPlay loop>
                        <source type="video/mp4" src={trailer} />
                    </video>
                    <div className="item-info">
                        <div className="item-info__icons">
                            <div className="left">
                                <PlayArrow className="icons-navigation-play"/>
                                <Add className="icons-navigation"/>
                                <ThumbUpAltOutlined className="icons-navigation"/>
                                <ThumbDownOutlined className="icons-navigation"/>
                            </div>
                            <div className="right">
                                <KeyboardArrowDownOutlined className="icons-navigation"/>
                            </div>                            
                        </div>
                        <div className="item-info__desc">
                            <span className="match">98% Match</span>
                            <span className="limit-age">16+</span>
                            <span className="time">2h 12m</span>
                            <span className="type">HD</span>
                        </div>
                        <div className="item-info__genre">
                            <span>Action</span>
                            <FiberManualRecordRounded className="bullet"/>
                            <span>Alien Sci-Fi</span>
                            <FiberManualRecordRounded className="bullet"/>
                            <span>Exciting</span>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default ListItem
