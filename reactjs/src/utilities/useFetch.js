import { useState, useEffect } from "react";

const useFetch = (url, options, defaultValue = null) => {
    const [data, setData] = useState(defaultValue);

    useEffect(() => {
        const env = window.location.href.includes('localhost') ? 'http://localhost:3001' : 'https://elitebronze.herokuapp.com'
        const fetchData = async () => {
            fetch(`${env}/api/${url}`)
                .then(response => response.json())
                .then(response => {
                    console.log(response)
                    setData(response);
                })
        }
        fetchData();
    }, [url])

    return { data };
}

export default useFetch;