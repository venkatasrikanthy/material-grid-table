import axios from 'axios';

export const UserService = {
    fetchUsers: (url) => {
        return new Promise((resolve, reject) => {
            const HttpOptions = {
                'headers': { 'Content-Type': 'application/json' },
                'mode': 'no-cors',
                'Access-Control-Allow-Origin': '*',
            };
            // loading the users data
            axios.get(url, HttpOptions)
            .then((response) => {
                resolve(response.data);
            }).catch((error) => {
                // handling error
                reject(error);
            });
        });
    }
}