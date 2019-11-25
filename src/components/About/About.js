import React from 'react';

import { TiLocation } from "react-icons/ti";
import './style.scss';
export const About = () => {
return (
    <section className="about">
        <h1>Marylin Monroe</h1>
        <TiLocation size="16" className="about__locationIcon" /> <span className="location">Poznań, PL</span>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <blockquote>Morbi in nisl vel justo feugiat hendrerit et in arcu. Duis aliquet, nisi sit amet gravida vulputate, nunc felis finibus sem, a pharetra ipsum nulla vitae mi. Proin aliquet diam vel ultricies dictum. Morbi in nisl vel justo feugiat hendrerit et in arcu. Duis aliquet, nisi sit amet gravida vulputate, nunc felis finibus sem, a pharetra ipsum nulla vitae mi. Proin aliquet diam vel ultricies dictum.</blockquote>
        <p>For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.</p>
    </section>
);
}
export default About;