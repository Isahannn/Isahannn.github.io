import React from "react";
import AU from '../../assets/about.png';
import CR1 from '../../assets/bogdan.jpg';
import CR2 from '../../assets/lexus.jpg';
import CR3 from '../../assets/Kurator.jpg';
import CR4 from '../../assets/Isahan.jpg';
import './About.css'; 

export default function About() {
  return (
    <div>
      <div className="main-header">
        <img src={AU} alt="header" className="main-image" />
        <div className="main-overlay"></div>
        <div className="main-text">
          <h1>О нас</h1>
        </div>
      </div>
      <div className='About-main'>
        <div className='Creator purple-bg'>
          <img src={CR1} alt="User" className="Creator-Image" />
          <div className='Creator-text'>Богдан Погодин</div>
          <div className='Creator-role'>CEO проекта MyParking.by</div>
        </div>
        <div className='Creator white-bg'>
          <img src={CR2} alt="User" className="Creator-Image" />
          <div className='Creator-text'>Алексей Григорьев</div>
          <div className='Creator-role'>Креативный директор проекта MyParking.by</div>
        </div>
        <div className='Creator purple-bg'>
          <img src={CR3} alt="User" className="Creator-Image" />
          <div className='Creator-text'>Наталья Зеленковская</div>
          <div className='Creator-role'>Руководитель отдела статистики и коммуникаций</div>
        </div>
        <div className='Creator white-bg'>
          <img src={CR4} alt="User" className="Creator-Image" />
          <div className='Creator-text'>Исахан Гасанов</div>
          <div className='Creator-role'>Веб-дизайнер сайта</div>
        </div>
      </div>
    </div>
  );
}
