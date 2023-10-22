import React from 'react'
import DonutGIF from '../../assets/Portfolio/Donut/Donut.gif'
import HTML from '../../assets/Portfolio/JDX_Webseite/Home.png'
import MatratzeGIF from '../../assets/Portfolio/Matratze/Matratze.gif'
import MazeGame from '../../assets/Portfolio/MazeGame/MazeGame.png'
import VRLL from '../../assets/Portfolio/VRLL/vrll_logo1.PNG'
import WebseiteGif from '../../assets/Portfolio/React_Webseite/Header.PNG'

export const portfolioData = [
    {
      id: 1,
      image: DonutGIF,
      title: '3D Blender Donut',
      github: 'https://github.com/MrCrashmash/blender-Donut',
      d_text: 'Donut TEXT',
      caller: 'donut',
      target: 'btn btn-primary'
    },
    {
      id: 2,
      image: HTML,
      title: 'HTML Webseite',
      github: 'https://github.com/MrCrashmash/html-Website',
      caller: 'html-web',
      target: 'btn btn-primary'
    },
    {
      id: 3,
      image: MatratzeGIF,
      title: '3D Blender Matratze',
      github: 'https://github.com/MrCrashmash/blender-Matratze',
      caller: 'matraze',
      target: 'btn btn-primary'
    },
    {
      id: 4,
      image: MazeGame,
      title: 'Das verrückte Labyrinth',
      github: 'https://github.com/MrCrashmash/java-DasVerrueckteLabyrinth',
      caller: 'mazegame',
      target: 'btn btn-primary'
    },
    {
      id: 5,
      image: VRLL,
      title: 'VR Lab Linking',
      github: '-',
      caller: 'vrll',
      target: 'isDisabled'
    },
    {
      id: 6,
      image: WebseiteGif,
      title: 'Meine erste React Webseite',
      github: 'https://github.com/MrCrashmash/react-portfolio-website',
      caller: 'react-web',
      target: 'btn btn-primary'
    }
  ];
