import React, { useState } from 'react'
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ()=>{
    const [categories, setCategories] = useState(['elon musk'])
    //let addcat;
    /* 
    ***PRUEBA 1 IMPRIMIR EN REACT
    const handleAdd = ()=>{
        
-----con el operador spred... mantenemos los elementos del array y le añadimos los otro
        let agregar = 'hola mundo'
        setCategories(cats=>[agregar,...categories])
    } */
    
    return (
        
        <>
                <h1>GifExpertApp </h1>
                <AddCategory setCategories={setCategories} />
                <hr/>
                
               {/* PRUEBA 1 IMPRIMIR EN REACT  <button onClick={handleAdd}>Agregar </button> */}
                <ol>        
                    {
                    categories.map(category =>(
                        <GifGrid    
                        key={ category }
                        category={category}
                        />
                    ))
                    }

                </ol>
             </>




        )
    }