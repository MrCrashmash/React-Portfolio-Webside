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
                <SwiperSlide className='details_images' style={{backgroundImage: `url(${IMG1})`, backgroundSize: 'cover'}}>
                  <img src={IMG1} style={{visibility:'hidden'}}/>
                </SwiperSlide>
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
        <h1>VR Lab Linking - Bachlorprojekt </h1>
            <p>
            Maschinelles Lernen und Roboter rücken immer mehr ins Auge der Öffentlichkeit und werden in der Zukunft ein sehr großes Thema spielen. 
            In der Industrie sind diese schon weit verbreitet, doch auch im Alltag finden Roboter langsam immer mehr Anklang. Dafür müssen die komplexen
            Handlungsabläufe und das Kooperieren, welche zum Beispiel für das Decken eines Tisches für das Frühstück benötigt werden, von den Robotern erlernt werden. 
            Aber wie und wo kann ein Roboter sowas möglichst natürlich lernen? Am besten, wie wir es auch tun. Durch Beobachtung von Menschen im Alltag.
            Dafür bietet sich Virtuelle Realität an, um solche Alltagsaufgaben und kooperative Interaktionen zu modellieren. 
            In diesem Projekt würde eine solche Umgebung zur Sammlung, Vernetzung und Aufbereitung von solchen Beobachtungen als Daten geschaffen. 
            Ein besonderes Augenmerk wurde dabei auf die Kooperation gelegt, sodass zwei Personen an verschiedenen Orten gemeinsam in einen virtuellen Raum zusammen Handlungsabläufe durchspielen können.<br/>
            <br/>            
            In unserem Projekt ist das Ziel, dass zwei Teilnehmer in einer 3D-modelierten Küche mit VR-Brillen einen Tisch decken, um mit den daraus generierten Daten Roboter lernen zu lassen. 
            Das zu tun ist wertvoll damit Roboter lernen, wie Menschen miteinander kooperieren und diese Verhaltensweisen imitieren können.<br/>
            <br/>
            Um das zu ermöglichen hatten wir folgende zwei Aufgabenbereiche:
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
            Die Kommunikation der Teilnehmer so aufzunehmen, dass ein Roboter davon lernen kann, ist allerdings eine Aufgabe für sich. Denn nicht alle beobachten Ereignisse kann man Objektiv quantifizieren. 
            Für die Daten, wo dies möglich ist, wie z.B. die Position der Gegenstände und der Personen im Raum, werden die Daten in eine Datenbank geschrieben.<br/>
            <br/>
            Die große Herausforderung besteht darin das prozedurale Wissen, welches beschreibt was zu einem bestimmten Moment getan und warum es getan wird, zu beschreiben. Ein Beispiel hierfür ist das gemeinsame Tischdecken bei einem Frühstück. 
            Der Roboter muss in der Lage sein, die verschiedenen Schritte zu verstehen, die bei der Vorbereitung des Essens und des Tischdeckens erforderlich sind, und wie diese Schritte zusammenhängen, um ein sinnvolles Ganzes zu bilden. 
            Dazu muss der Roboter die Bedeutung von Gegenständen wie Teller, Besteck und Gläsern verstehen, um zu wissen, wie sie platziert werden sollten. 
            Diese Informationen, wie dass der Tisch gerade gedeckt wird und was für Gegenstände und Schritte für diesen Prozess benötigt werden, wird in Ontologien festgehalten. 
            Zu entscheiden welche dieser beobachtbaren Interaktionen wichtig für den Kontext sind, welche Gestände da dran beteiligt und was für ein Ziel diese Interaktionen haben, ist ein essentieller Schritt damit Roboter aus den Daten lernen können. 
            Dies ausführlich zu modellieren ist wichtig, damit diesen Roboter in Zukunft in der Lage sind Kontext basierte Aufgaben in Kooperation zu erledigen.
            </p>
            <br/>
            <p>
              Das Projekt ist leider in einem Privaten Repository
            </p>

    </div>
  )
}

export default Details_VRLL