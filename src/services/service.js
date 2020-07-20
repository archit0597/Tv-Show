import axios from 'axios';

//baseURL for the api calls
const baseURL = "http://api.tvmaze.com"

//api to get all show details
export const getAllShows=()=>{
    return axios.get(`${baseURL}/shows`);
}

//api to get show details by show id
export const getShowById= (id)=>{
    return axios.get(`${baseURL}/shows/${id}?embed[]=cast&embed[]=crew&embed[]=seasons&embed[]=episodes`);
}

//api to get show by name for search functionality
export const getShowsByName=(name)=>{
    return axios.get(`${baseURL}/search/shows?q=${name}`);
}