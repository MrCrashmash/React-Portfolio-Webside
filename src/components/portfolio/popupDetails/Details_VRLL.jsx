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
            Ziel dieses Bachelorprojekts war es, dass zwei Teilnehmer in einer 3D Küche mit VR-Brillen einen Tisch decken. 
            Mit den daraus generierten Daten sollten Roboter lernen wie Menschen miteinander kooperieren, und diese Verhaltensweisen letztendlich imitieren.<br/>
            <br/>
            Um das zu ermöglichen hatten wir folgende Aufgabenbereiche:
            </p>

            <br/>

            <h2>Lab Linking</h2>
            <p>
            Der VR-LL Multiplayer ermöglicht es, dass 2 Personen zusammen von unterschiedlichen Standorten einen Tisch decken können. Dies wird als Lab-Linking bezeichnet. 
            Dabei kommunizieren die beiden Personen nonverbal und verständigen sich somit nur durch Handgesten. Die eine Person übernimmt dabei die Rolle des Servers und die andere Person die Rolle des Clients.
            </p>
            <br/>
            <h2>Datenerfassung</h2>
            <p>
              Im Rahmen der Datenerfassung haben wir uns intensiv mit dem Aufnehmen, Visualisieren und Konvertieren von Bewegungsdaten aus unserem VR-Setup beschäftigt. Dabei haben wir verschiedene Systeme im Projekt eingesetzt und 
              die Ausgangssituation analysiert. Wir konnten erfolgreich eine Vielzahl von Events loggen und dokumentieren. Also das pozeduale Wissen, welches beschreibt was zu einem bestimmten Moment getan wurde.  
              Dies ist essentieller Schritt für den Roboter, dieser muss den Kontext der Interaktionen verstehen, 
              welche Gegenstände beteiligt sind und welches Ziel die Interaktion hat, um in der Zukunft in der Lage zu sein Kontextbasierte Aufgaben in Kooperation zu erledigen.
            </p>

    </div>
  )
}

export default Details_VRLL