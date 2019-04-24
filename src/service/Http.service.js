import * as axios from 'axios';
import {Auth} from 'aws-amplify';

class Http {
    static BASE_AWS_URL = 'https://eajcrbbnc1.execute-api.eu-central-1.amazonaws.com/dev';

    static getConfigWithToken = async () => {
        const currentSession = await Auth.currentSession();
        const jwt_token = currentSession.getIdToken().getJwtToken();
        const config = {
            headers: {'Authorization': 'Bearer ' + jwt_token}
        };

        return config
    };

    static post = async (path) => {
        const config = await Http.getConfigWithToken();
        return await axios.post(Http.BASE_AWS_URL + path, {}, config);
    };

    static get = async (path) => {
        const config = await Http.getConfigWithToken();
        return await axios.get(Http.BASE_AWS_URL + path, config);
    }

}

export default Http;