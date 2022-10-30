const BASE_URL = 'https://amazon-api.sellead.com/country';

export const fetchStates = () => {
    const url = '${BASE_URL}';
    return fetch(url).then(Response => Response.json)
}