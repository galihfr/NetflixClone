import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import ListItem from '../listItem/ListItem'
import './list.scss'
import React, { useRef, useState } from 'react'

const List = ({titleSection}) => {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNuber] = useState(0);
    const listRef = useRef();
    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;

        if(direction === "left" && slideNumber > 0){
            setSlideNuber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }

        if(direction === "right" && slideNumber < 5){
            setSlideNuber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    }
    return (
        <div className="list">
            <span className="list__title">{titleSection}</span>
            <div className="list__wrapper">
                <ArrowBackIosOutlined 
                    className="slider left" 
                    onClick={()=>handleClick("left")}
                    style={{display: !isMoved && "none"}}
                />
                <div className="container" ref={listRef}>
                    <ListItem index={0}/>
                    <ListItem index={1}/>
                    <ListItem index={2}/>
                    <ListItem index={3}/>
                    <ListItem index={4}/>
                    <ListItem index={5}/>
                    <ListItem index={6}/>
                    <ListItem index={7}/>
                    <ListItem index={8}/>
                    <ListItem index={9}/>                    
                </div>
                <ArrowForwardIosOutlined className="slider right" onClick={()=>handleClick("right")}/>
            </div>
        </div>
    )
}

export default List
