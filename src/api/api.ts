import axios from 'axios'

export const RequestsAPI = {
    requestPost(success: boolean) {
        return axios.post("https://neko-cafe-back.herokuapp.com/auth/test", {success} )
    }
}