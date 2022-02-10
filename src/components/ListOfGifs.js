import React, { useEffect, useState } from 'react'
import Gif from './Gif';
import getGifs from '../services/getGifs';


export default function ListOfGifs({ params }) {

   const { keyword } = params

   const [loading, setLoading] = useState(false)
   const [gifs, setGifs] = useState([]);

   useEffect(function () {
      setLoading(true)

      getGifs({ keyword })
         .then(gifs => {
            setGifs(gifs)
            setLoading(false)
         })
   }, [keyword]); // La dependencia. Cada vez que cambie 'keyword' se vuelve a ejecutar


   if (loading) return <i>⚠ Cargando...</i>

   return (
      <>
         {
            gifs.map(({ id, title, url }) =>
               <Gif
                  id={id}
                  key={id}
                  title={title}
                  url={url}
               />

               // gifs.map(singleGif =>

                  // <Gif
                  // id={singleGif.id}
                  // key={singleGif.id}
                  // title={singleGif.title}
                  // url={singleGif.url}
                  // />

                  // <Gif
                  //    key={singleGif.id}
                  //    { ...singleGif}
                  // />
               )
         }
      </>
   )
}

