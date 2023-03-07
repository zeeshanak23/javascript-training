import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import photo from './me.png';
import SkillsTag from './components/SkillTag/SkillsTag';
import socialIcons from './SocialIconDef';
import SocialIcon from './components/SocialIcons/SocialIcons';
import Profile from './components/profile/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
const skills = ["java", "Python", "Mysql"]

root.render(
  <>
    <Profile image={photo} name="Md Zeeshan Akhter Ansari"
      companyName="Apple"
      position="Senior Software Enginner"
      country="New York" />

    <div className='skill'>
      {skills.map((s, i) => (<SkillsTag key={i} skill={s} />))}
    </div>

    <div className='social-icons'>
      {socialIcons.map((icon, i) => <SocialIcon key={i} name={icon.name} imgSource={icon.src} />)}
    </div>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
