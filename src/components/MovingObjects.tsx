import React, { useContext } from "react";
import MovingObject from "../components/MovingObject";
import { StateContext } from "../contexts/StateContext";

interface IProps {
    page: any;
}

const MovingObjects: React.SFC<IProps> = ({ page }) => {
    const { isMobile } = useContext(StateContext);
    if (isMobile) {
        return null;
    }

    const skills = [
        { name: "javascript", level: 1.9 },
        { name: "react", level: 2 },
        { name: "html", level: 1.5 },
        { name: "css", level: 1.5 },
        { name: "bootstrap", level: 1.3 },
        { name: "node", level: 1.5 },
        { name: "git", level: 1.4 },
        { name: "redux", level: 1.4 },
        { name: "mysql", level: 1.6 },
        { name: "express", level: 2 },
        { name: "sass", level: 1.4 },
        { name: "typescript", level: 1.4 }
    ];

    const objects = skills.map((skill, index) => (
        <MovingObject page={page} key={index} skill={skill.name} level={skill.level} index={index} />
    ));

    return <div className="moving-objects">{objects}</div>;
};

export default MovingObjects;
