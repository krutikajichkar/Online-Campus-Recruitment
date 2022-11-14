import React from 'react'
// import { Link } from 'react-router-dom'
import './About.css';
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
function About() {
    return (
        <div>
            <Header />
            <Navbar />
            <div id='about-div'>
                <h1 id="about-header"> Welcome !</h1>
                <div>
                    {/* <div className="line"></div> */}
                    <div><p id="line-paragraph">Tulsiramji Gaikwad-Patil College of Engineering and Technology (TGPCET) was established in the year 2007 by Vidarbha Bahu-uddeshiya Shikshan Sanstha (VBSS), a registered society. It is a self financed Private Engineering College, which is affiliated to Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU) Nagpur and is approved by All India Council for Technical Education, New Delhi. Also college is approved by Directorate of Technical Education (DTE), Mumbai, Maharashtra State. The Institute is Accredited with A+ (3.32 CGPA) by NATIONAL ASSESSMENT AND ACCREDITATION COUNCIL (NAAC). An Autonomous Institute affiliated to RTM Nagpur University, Nagpur.</p>
                        <p className="paragraph">The College offers four years UG programs in Eight disciplines of engineering viz. Bio-Technology (B.Tech), Aeronautical Engineering (AE), Computer Science and Engineering (CSE), Information Technology (IT), Electronics and Communication Engineering (ECE), Mechanical Engineering (ME), Civil Engineering (CE) and Electrical Engineering (EE).</p>
                        <p className="paragraph">TGPCET offers five PG programs in engineering viz. Computer Science and Engineering (CSE), Integrated Power System (IPS), Structural Engineering (SE), Electronics and Communication Engineering (ECE), Artificial Intelligence & Machine Learning (AIML) and also offers Two years PG programs in Master of Business Administration (MBA) as well as Two years Master in Computer Application (MCA).</p>
                        <p className="paragraph">In addition TGPCET conducts three years 2nd shift Diploma programs in four disciplines of engineering such as Civil Engineering (CE), Mechanical Engineering (ME), Computer Science and Engineering (CSE) and Electrical Engineering (EE).</p>
                        <p className="paragraph">College is located in the midst of Multimodal International Cargo Hub and Airport (MIHAN) and also in the vicinity of Butibori Industrial area, Nagpur.</p>
                        <p className="paragraph">This sanstha is started by the dedicated and renowned academicians genuinely committed to impart quality technical education to the students, who are aspiring for carrier in Engineering, Technology and Management.</p>
                        <p className="paragraph">College offers additional courses beyond syllabus to expose the students towards the industrial climate by conducting courses in C++ with PYTHON, C#.NET, Java, Oracle-SQL and Administration, CCNA, PLC SCADA, MATLAB, AUTOCAD, STAAD PRO, CREO, PHP.</p>
                        <p className="paragraph">The college has signed MoU with Charusat University, Gujrat Dr. Panjabrao Deshmukh Krishi Vidyapeeth (PDKV), Akola and Vignan’s University, Guntur to excel the academic and research capability of staff and students in the emerging fields of Science, Engineering and Agriculture.</p>
                        <p className="paragraph">The staff having versatile rich experience in teaching, research and industry are educating students of all sections of society to foster Quality Education and to build high moral standards.</p>
                        <p className="paragraph">TGPCET develops the attitude towards equality, fraternity, liberty, justice and respect for all sections of society. TGPCET grows students in the domain of latest scientific and technological areas by introducing ATMEL, USA, ROBOTICS and embedded programs for enhancing inter disciplinary research fields.</p>
                        <p className="paragraph">College has continuously risen in popularity amongst the aspiring students and parents and has become a preferred choice for taking admissions due to availability of elegant and vast infrastructure facilities, dedicated staff members, who provides holistic quality education.</p>
                        <p className="paragraph">The college is guided by its Advisory Committee consisting of Eminent Academician from Prestigious Institutes and also by the Renowned Industrialists. The institute works towards excellence in imparting quality technical education by motivating students to become a trend-setter to acquire Global leadership. For implementing the quality policy, an action plan is collectively prepared by the Principal and HoDs as per the vision of the Management and the Management regularly interacts with the Principal to review the implementation process of the quality plans.</p>
                        <p className="paragraph">ABP News had honored with an Award to TGPCET as “An Outstanding Institute (West)” in the year 2015. It also got feather in the cap in Academics by getting an Award from Big Research as “A Most Promising Engineering College” in the Vidarbha Region of Maharashtra in the year 2012.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About