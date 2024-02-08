// import { useState, useEffect } from 'react';
import { GifItem } from "./GifItem";
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category, onDelete  }) => {

  const { images, isLoading } = useFetchGifs( category );

  const onClickDeleteItem = () => {
    onDelete( category );
  }

  return (
    <>
        <h3>{ category }</h3>
        {/* {
          isLoading 
          ? ( <h2>Cargando...</h2> )
          : null
        } */}
        {isLoading && ( <h2>Cargando...</h2> )}
        <button onClick={ onClickDeleteItem }>Eliminar</button>
        <div className="card-grid" >
          {images.map( image => (
            // <li key={ id }>{ title }</li>
            <GifItem 
              key={ image.id }
              {...image}
            />
          ))}
        </div>
    </>
  )
}


