
import Cookies from "js-cookie";
import { validateToken } from "./validateToken";

const handlerAcessUser = async (user) => {
    const responseIsUserAtuh = {
        name:'Marcelino',
        email:'marcelino@teste.com',
        token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    };
    const isTokenValidate =validateToken(responseIsUserAtuh.token);

    if(isTokenValidate){
        Cookies.set('token',responseIsUserAtuh.token);
    }
}
export { handlerAcessUser };

