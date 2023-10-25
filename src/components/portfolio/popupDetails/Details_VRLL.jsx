import React from 'react'
import './Details.css'
import IMG1 from '../../../assets/Portfolio/VRLL/Bild1.png'
import IMG2 from '../../../assets/Portfolio/VRLL/Bild2.png'
import IMG3 from '../../../assets/Portfolio/VRLL/Bild3.png'
import IMG4 from '../../../assets/Portfolio/VRLL/Bild4.png'
import IMG5 from '../../../assets/Portfolio/VRLL/Bild5.png'
import Logo from '../../../assets/Portfolio/VRLL/vrll_logo1.PNG'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const Details_VRLL = () => {
  return (
    <div className='details__wrapper'>
        {/* Top Picture */}
        <Swiper className='container details__container'
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            >
                <SwiperSlide className='details_images' style={{backgroundImage: `url(${IMG2})`, backgroundSize: 'cover'}}>
                  <img src={IMG2} style={{visibility:'hidden'}}/>
                </SwiperSlide>
                <SwiperSlide className='details_images' style={{backgroundImage: `url(${IMG3})`, backgroundSize: 'cover'}}>
                  <img src={IMG3} style={{visibility:'hidden'}}/>
                </SwiperSlide>
                <SwiperSlide className='details_images' style={{backgroundImage: `url(${IMG4})`, backgroundSize: 'cover'}}>
                  <img src={IMG4} style={{visibility:'hidden'}}/>
                </SwiperSlide>
                <SwiperSlide className='details_images' style={{backgroundImage: `url(${IMG5})`, backgroundSize: 'cover'}}>
                  <img src={IMG5} style={{visibility:'hidden'}}/>
                </SwiperSlide>
                <SwiperSlide className='details_images' style={{backgroundImage: `url(${Logo})`, backgroundSize: 'cover'}}>
                  <img src={Logo} style={{visibility:'hidden'}}/>
                </SwiperSlide>
        </Swiper>


        {/* Text */}
        <h1>VR Lab Linking - Bachelorprojekt </h1>
            <p>            
              Das Ziel dieses Bachelorprojekts war, dass zwei Teilnehmer in einer 3D-Küche mithilfe von VR-Brillen gemeinsam einen Tisch decken. 
              Die gesammelten Daten sollen die Grundlage dafür sein, dass Roboter lernen, wie Menschen kooperieren, um dieses Verhalten imitieren zu können.<br/>
            <br/>
              Um dies zu ermöglichen, hatten wir folgende Aufgabenbereiche:
            </p>

            <br/>

            <h2>Lab Linking</h2>
            <p>
              Der VR-LL-Multiplayer ermöglicht es zwei Personen, von unterschiedlichen Standorten aus gemeinsam einen Tisch zu decken. Dieses Vorgehen wird als Lab-Linking bezeichnet, 
              bei dem die beiden Personen nonverbal kommunizieren und sich lediglich durch Handgesten verständigen. Eine Person übernimmt dabei die Rolle des Servers und die andere Person die Rolle des Clients.
            </p>
            <br/>
            <h2>Datenerfassung</h2>
            <p>
              Im Rahmen der Datenerfassung haben wir uns intensiv mit der Aufnahme, Visualisierung und Konvertierung von Bewegungsdaten aus unserem VR-Setup beschäftigt. 
              Wir haben verschiedene Systeme im Projekt eingesetzt und die Ausgangssituation analysiert. Wir konnten erfolgreich eine Vielzahl von Events loggen und dokumentieren. 
              Somit haben wir das prozeduale Wissen erlangt, welches beschreibt, was zu einem bestimmten Moment getan wurde. Dies ist ein essentieller Schritt für den Roboter, um in der Zukunft kontextbasierte Aufgaben in Kooperation zu erledigen. 

              Dies ist ein essentieller Schritt für den Roboter. Er muss den Kontext der Interaktionen verstehen, 
              welche Gegenstände beteiligt sind und welches Ziel die Interaktion hat, um in der Zukunft in der Lage zu sein kontextbasierte Aufgaben in Kooperation zu erledigen.
            </p>

    </div>
  )
}

export default Details_VRLL