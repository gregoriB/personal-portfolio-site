import React, { useEffect, useState, useContext } from 'react';
import { StateContext } from '../contexts/StateContext';
import '../styles/skills.css';

interface IProps {
    skill: string,
    index: number,
    level: number,
    page: any
}

const MovingObject: React.SFC<IProps> = ({ skill, index, level, page }) => {
    const { isMobile, currentPage } = useContext(StateContext);
    
    const getRandomNumber = (min: number, max: number) => Math.random() * (max - min) + min;
    const coinFlip = () => Math.random() > .5 ? getRandomNumber(.1, .5) : -getRandomNumber(.1, .5);
    const randomPos = [Math.random() * window.innerWidth * .8, Math.random() * window.innerHeight * .8];
    const [ skillPos, setSkillPos ] = useState<Array<number>>(randomPos);
    const [ skillBearing, setSkillBearing ] = useState([coinFlip(), coinFlip()]);
    const size = { width: 40 * level, height: 40 * level };

    useEffect(() => {
    }, [])
    
    useEffect(() => {
        const checkBoundary = (pos: number[], bearing: number[]) => {
            const posX = pos[0], posY = pos[1];
            const winX = page.current.offsetWidth * 1.025, winY = page.current.offsetHeight * .995;
            if (posX <= 1 || posX + size.width >= winX) {
                bearing.splice(0, 1, bearing[0] * -1);
            } 
            if (posY <= 1 || posY + size.height >= winY) {
                bearing.splice(1, 1, bearing[1] * -1);
            } 
        }

        const handleMove = () => {
            let pos = [...skillPos];
            let bearing = [...skillBearing];
            checkBoundary(pos, bearing);
            const X =  pos[0] + (bearing[0]);
            const Y =  pos[1] + (bearing[1]);
            pos = [X, Y]
            setSkillPos(pos);
            setSkillBearing(bearing);
        }

        let interval = 0;
        
        if (!isMobile && currentPage === 'About-Me') {
            interval = window.setInterval(() => handleMove(), 16);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval)
        };
    }, [skillPos, index, skillBearing, size, isMobile, currentPage, page]);

    return (
        <div 
            className={`skill ${isMobile && 'inactive'} ${skill}`}
            style={{
                left: skillPos[0],
                top: skillPos[1],
                width: size.width,
                height: size.height,
                backgroundImage: `url(${require(`../SVGs/${skill}.svg`)})`,
                opacity: level / 4
            }}
        />
    )
}

export default MovingObject;