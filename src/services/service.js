import axios from 'axios';

export const getAllShows=()=>{
    return axios.get("http://api.tvmaze.com/shows");
}

export const getShowById= (id)=>{
    return axios.get(`http://api.tvmaze.com/shows/${id}?embed[]=cast&embed[]=crew`);
}

export const getShowsByName=(name)=>{
    return axios.get(`http://api.tvmaze.com/search/shows?q=${name}`);
}