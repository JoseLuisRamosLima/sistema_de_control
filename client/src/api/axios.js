// import axios from "axios";

// const token = localStorage.getItem('token');

// const instance = axios.create({
//     // **************************************
//     // CONSUMO DE ENDPOINT AL CODIGO LOCAL DE BACKEND
//     // baseURL: 'http://localhost:3000/api',
//     // **************************************
//     // CONSUMO DE ENSPOINT AL CODIGO DE PRODUCCION HOST ====RENDER
//     baseURL: 'https://sistema-de-control.onrender.com/api',
//     withCredentials: true,
//     headers: {
//         'Authorization': `Bearer ${token}`
//     }
// })

// export default instance

// import axios from "axios";

// const instance = axios.create({
//     baseURL: 'https://sistema-de-control.onrender.com/api',
//     withCredentials: true,
// })

// instance.interceptors.request.use((config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//         config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
// }, (error) => {
//     return Promise.reject(error);
// });



// export default instance


import axios from "axios";

const token = localStorage.getItem('token');

const instance = axios.create({
    baseURL: 'https://sistema-de-control.onrender.com/api',
    withCredentials: true,
    headers: {
        'Authorization': `Bearer ${token}` // Uso de comillas invertidas para interpolar el token
    }
});

export default instance;
