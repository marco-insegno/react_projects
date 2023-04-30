import { useState, useEffect } from 'react'

function useFetch(url){

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setIsLoading(!isLoading)

        fetch(url)
            .then(response => response.json())
            .then(data => setData(data))

        setIsLoading(!isLoading)

    },[url])

    return {data,isLoading}
}

export default useFetch