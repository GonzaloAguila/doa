import React from 'react'
import styles from './style.module.css'
import Carousel from 'react-elastic-carousel'
import pp from '../../assets/images/pp.png'
import ps from '../../assets/images/ps.png'
import illus from '../../assets/images/illus.png'
import pub from '../../assets/images/pub.png'
import visio from '../../assets/images/visio.png'
import excel from '../../assets/images/excel.png'
import word from '../../assets/images/word.png'
import fm from '../../assets/images/fm.png'
import id from '../../assets/images/id.png'
import { useState } from 'react'


function Slideshow() {

    const breakpoints = [
        {width: 1, itemsToShow: 1},
        {width: 550, itemsToShow: 2},
        {width: 760, itemsToShow: 3},
        {width: 1200, itemsToShow: 4},
    ]

    const [items,setItems] = useState([
        {id: 1, src: ps, text: 'Photoshop'},
        {id: 2, src: word, text: 'Word'},
        {id: 3, src: excel, text: 'Excel'},
        {id: 4, src: fm, text: 'FrameMaker'},
        {id: 5, src: id, text: 'InDesign'},
        {id: 6, src: illus, text: 'Illustrator'},
        {id: 7, src: pp, text: 'PowerPoint'},
        {id: 8, src: pub, text: 'Publisher'},
        {id: 9, src: visio, text: 'Visio'}
    ])

    return (
        <div id='slider' className={styles.container}>
               <Carousel breakPoints={breakpoints}>
                   {items.map((item) => {
                   return item.id === 6 ? 
                    <div key={item.id} className={styles.item}>
                         <h5>{item.text}</h5>
                         <img style={{height: '120px', width: '200px'}} src={item.src} alt={item.text} />
                     </div>
                    : 
                      <div key={item.id} className={styles.item}>
                         <h5>{item.text}</h5>
                         <img src={item.src} alt={item.text} />
                     </div>
                   })}
               </Carousel>
        </div>
    )
}

export default Slideshow
