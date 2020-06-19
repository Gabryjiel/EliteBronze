import { useState, useEffect } from "react";

const useFetch = (url, options, defaultValue = null) => {
    const [data, setData] = useState(defaultValue);

    useEffect(() => {
        const fetchData = async () => {
            fetch(`http://localhost:3001/api/${url}`)
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