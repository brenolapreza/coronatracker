import axios from 'axios';


const ApiVacina = axios.create({
    baseURL: `https://covid-api.mmediagroup.fr/v1/vaccines?country=Brazil`
})

export default ApiVacina