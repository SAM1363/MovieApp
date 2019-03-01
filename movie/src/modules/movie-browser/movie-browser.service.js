const API_KEY = '6fa5f55d29bd406da96fac5908dbbd11';
const BASE_URL = 'https://api.themoviedb.org/3';

const createMovieDbUrl = (relativeUrl, queryParams) => {
    let baseUrl = `${BASE_URL}${relativeUrl}?api_key=${API_KEY}&language=en-US`;
    if(queryParams){
        Object.keys(queryParams).forEach(paramName => baseUrl += `&${paramName}=${queryParams[paramName]}`)
    }
    return baseUrl; 
}

export const getMovies = async ({page}) => {
    const fullUrl = createMovieDbUrl('/movie/top_rated', {page});
    return fetch(fullUrl);
}

export const getSearchMovies = async ({page, query}) => {
    const fullUrl = createMovieDbUrl(`/serch/movie`, {page, query});
    return fetch(fullUrl);
}

export const getMovieDetails = async ({movieId}) => {
    const fullUrl = createMovieDbUrl(`/movie/${movieId}`);
    return fetch(fullUrl);
}