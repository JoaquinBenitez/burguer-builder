import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-joaquin.firebaseio.com/'
})

export default instance;