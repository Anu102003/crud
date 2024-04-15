import axios from 'axios'

const USER_BASE_REST_API_URL = 'http://localhost:8090/api/v1/user';

class UserService {

    async getAllUser() {
        try{
            return axios.get(USER_BASE_REST_API_URL)
        }catch (error) { 
            console.log("Error at getallUser : "+error); 
            return error;
         }
    }

    async createUser(user) {
        try {
            return axios.post(USER_BASE_REST_API_URL + '/createUser', user);
        }
        catch (error) { 
            // console.log("Error at createUser : "+error); 
            return error;
         }
    }

    async getUserById(userEmailId) {
        try {
            return await axios.get(USER_BASE_REST_API_URL + '/' + userEmailId);
        }
        catch (error) { 
            // console.log("Error at getUser : "+error); 
            return error; };
    }


    async updateUser(userEmailId, user) {
        try{
            return axios.put(USER_BASE_REST_API_URL + '/' + userEmailId, user);
        }
        catch (error) { 
            console.log("Error at updateUser : "+error); 
            return error; };
    }

    async deleteUser(userEmailId) {
        try{
            return axios.delete(USER_BASE_REST_API_URL + '/' + userEmailId);
        }
        catch (error) { 
            console.log("Error at deleteUser : "+error); 
            return error; };
        }
}

export default new UserService();




