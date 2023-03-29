/* eslint-disable no-useless-escape */
import { useState } from "react";

export const useCheckAuthError = (init = {}, users = {}) => {
    const [error, setError] = useState(init);    
    const regularEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
    const regularPassword = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  
    const checkError = (name, value) => {
        if(value.trim() === ''){
            setError({...error, [name]: "This field must be filled!!"})
            return 
        }
        switch (name) {
            case 'email':
                if (!regularEmail.test(value))
                    setError({...error, [name]: "Email is incorrect!!!"})
                else
                    setError({...error, [name]: ""})
                break;
            case 'password':
                if(!regularPassword.test(value))
                    setError({...error, [name]: "Password is incorrect!!!"})
                else
                    setError({...error, [name]: ""})
                break;
        
            default:
                break;
        }
    }
  
    return [error, setError, checkError];

}