import axios from "axios";
const url = process.env.APP_URL || "http://localhost:5000/"
const apiFullSports = axios.create({
    baseURL: "https://backend-fullsport.herokuapp.com"
});
apiFullSports.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export default apiFullSports;