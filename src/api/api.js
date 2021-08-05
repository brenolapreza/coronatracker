import axios from 'axios';

const Api = axios.create({
    baseURL: `https://coronavirus-19-api.herokuapp.com/`
})

export default Api