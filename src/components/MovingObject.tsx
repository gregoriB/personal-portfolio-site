import React, { useEffect, useState, useContext } from "react";
import { StateContext } from "../contexts/StateContext";
import "../styles/skills.css";

interface IProps {
    skill: string;
    index: number;
    level: number;
    page: any;
}

const MovingObject: React.SFC<IProps> = ({ skill, index, level, page }) => {
    const getRandomNumber = (min: number, max: number) =>
        Math.random() * (max - min) + min;
    const coinFlip = () =>
        Math.random() > 0.5
            ? getRandomNumber(0.1, 0.5)
            : -getRandomNumber(0.1, 0.5);
    const randomPos = () => [
        Math.random() * window.innerWidth * 0.8,
        Math.random() * window.innerHeight * 0.8
    ];
    const { isMobile, currentPage } = useContext(StateContext);
    const [skillPos, setSkillPos] = useState<Array<number>>(randomPos);
    const [skillBearing, setSkillBearing] = useState<Array<number>>([
        coinFlip(),
        coinFlip()
    ]);
    const size = {
        width: window.innerWidth * 0.025 * level,
        height: window.innerWidth * 0.025 * level
    };

    useEffect(() => {
        const initializeMovingObjects = () => {
            const coinFlip = () =>
                Math.random() > 0.5
                    ? getRandomNumber(0.1, 0.5)
                    : -getRandomNumber(0.1, 0.5);
            setSkillPos(randomPos);
            setSkillBearing([coinFlip(), coinFlip()]);
        };
        initializeMovingObjects();
        window.addEventListener("resize", initializeMovingObjects);

        return () => window.addEventListener("resize", initializeMovingObjects);
    }, [setSkillPos, setSkillBearing]);

    useEffect(() => {
        const checkBoundary = (pos: number[], bearing: number[]) => {
            const posX = pos[0],
                posY = pos[1];
            const winX = page.current.offsetWidth * 1.025,
                winY = page.current.offsetHeight * 0.995;
            if (posX <= 1 || posX + size.width >= winX) {
                bearing.splice(0, 1, bearing[0] * -1);
            }
            if (posY <= 1 || posY + size.height >= winY) {
                bearing.splice(1, 1, bearing[1] * -1);
            }
        };

        const move = () => {
            let pos = [...skillPos];
            let bearing = [...skillBearing];
            checkBoundary(pos, bearing);
            const X = pos[0] + bearing[0];
            const Y = pos[1] + bearing[1];
            pos = [X, Y];
            setSkillPos(pos);
            setSkillBearing(bearing);
        };
        let interval = 0;
        if (!isMobile && page) {
            interval = window.setInterval(() => move(), 32);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [skillPos, index, skillBearing, size, isMobile, currentPage, page]);

    return (
        <div
            className={`skill ${isMobile && "inactive"} ${skill}`}
            style={{
                left: skillPos[0],
                top: skillPos[1],
                width: size.width,
                height: size.height,
                backgroundImage: `url(${require(`../SVGs/${skill}.svg`)})`,
                opacity: level / 8
            }}
        />
    );
};

export default MovingObject;
