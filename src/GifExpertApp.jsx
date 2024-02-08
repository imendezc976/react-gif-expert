import { useState } from 'react';
import { AddCategory, GifGrid} from './components';



export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'Avatar' ]);

  const onAddCategory = (newCategory) => {
    //setCategories(categories.concat(['Valorant']));
    //setCategories(cat => [...cat, 'Valorant']);
    //setCategories(['Valorant', ...categories]);
    //setCategories([...categories, 'Valorant']);
    

    if( categories.includes(newCategory)) return
    setCategories([newCategory, ...categories]);
  };

  const onDeleteCategory = ( deletedCategory) => {
    setCategories( categories =>  
      categories.filter((cat) => cat !== deletedCategory));
  }

  return (
    <>
        {/* API KEY GIF VeAyu6nNRAmTs2KESt8X6zAA7aEuHmxd */}
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
          //setCategories={ setCategories }
          onNewCategory={ value => onAddCategory(value) }
        />

        {/* Listado de items (gifs) */}

        {/* <button onClick={ onAddCategory }>Agregar</button> */}
        {/* <ol>
          { categories.map( category => {
              return (
                <div key={category}>
                  <h3>{ category }</h3>
                </div>
              );
          }) }
        </ol> */}
        {/* <ol>
          { categories.map( category => 
              (
                <div key={category}>
                  <h3>{ category }</h3>
                </div>
              )
          )}
        </ol> */}

        { categories.map( category => (
              <GifGrid 
                key={ category } 
                category={ category }
                onDelete={ onDeleteCategory } />
            )
          )}
        
            {/* Git Items */}
        
    </>
  )
}
