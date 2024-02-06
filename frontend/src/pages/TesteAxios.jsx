import React, { useState } from 'react';
import axiosInstance from '../axios/axiosInstance';
import ImageComponent from './ImageComponent';

function TesteAxios() {
    const [data, setData] = useState(null);

    const fetchData = () => {
        axiosInstance.get('/')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    const dataToPost = {
        title: 'Sample Title',
        body: 'This is a sample content.',
      };

    const postData = () => {
        axiosInstance.post('/data', dataToPost)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    return (
      <div>
        <ImageComponent />
        <button onClick={fetchData}>Fetch Data</button>
        <button onClick={postData}>Post Data</button>
        {data && <div>{JSON.stringify(data)}</div>}
      </div>
    );
}

export default TesteAxios;
