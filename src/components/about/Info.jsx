import React from "react";

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
            <i class='bx bx-award about__icon' ></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">Zuitt Bootcamp</span>
        </div>
            <div className="about__box">
            <i class='bx bx-briefcase-alt about__icon'></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">3 Capstones</span>
        </div>
            <div className="about__box">
            <i class='bx bx-phone about__icon'></i>
            <h3 className="about__title">Contact</h3>
            <span className="about__subtitle">+63 968 536 3891</span>
        </div>
        </div>
    )
}

export default Info