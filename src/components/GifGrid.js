import React, { useEffect, useState } from 'react'

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])
    const [counter, setCounter] = useState(1);
    const getGifs = async () => {
        const url = "https://api.giphy.com/v1/gifs/search?q=" + category + "&limit="+ counter +"&api_key=pMv75h9GS7LGgPVCJvqX0rA91mLbMm4B";
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        setImages(gifs);
        setCounter(counter + 1);
    }

    // se usa para condicionar las ejecuciones, si se pone un array vacio
    // para las dependencias se ejecuta solo una vez
    useEffect(() => {
        getGifs();
    }, []);

    return (
        <div>
            <h1>
                {category}
            </h1>
            <ul>
            {
                images.map(img =>
                    <li key={img.id}>
                        <h2>
                            {img.title}
                        </h2>
                        <img src={img.url}></img>
                    </li>
                )
            }
            </ul>
            <button onClick={getGifs}>
                Click
            </button>
        </div>
    )
}
