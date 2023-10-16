import { authApi } from "../api/axios";

class Authservice{
    Login =(login)=>authApi.post('/signin',login);

    Signup =(signup)=>authApi.post('/signup',signup);
}
export default new Authservice();