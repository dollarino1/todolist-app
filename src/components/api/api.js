import * as axios from 'axios';

const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://api-nodejs-todolist.herokuapp.com/',
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRjY2JlYzZiNTVkYTAwMTc1OTcyMmMiLCJpYXQiOjE1NzQ3NTE2ODh9.GPbsl9FLX4VrsGVErodiXypjuz1us4tfD0jwg2_UrzY'
    }
});

export const mainAPI = {
    postTask(description) {
        return instance.post(`task`, {description})
        .then(response => {
            return response.data;
        })}

}