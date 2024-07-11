
// import { useEffect } from "react";
import { createContext, useState, useContext, useEffect } from 'react';
import { registerusuario, loginRequest, verifyTokenRequest } from "../api/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {

    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth debe usarse dentro de un authProvider");
    }
    return context;

};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors]= useState([]);
    const [loading, setLoading] = useState(true);

    const signup = async (user)=> { 
        try {
            const res = await registerusuario(user);
            // console.log("repsuesta del servidor ", res)
            // console.log("datos recividos ",res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.log(error.response.data)
            setErrors(error.response.data);
        }

    };


    const signin = async (user) => { 
        
        try {
            const res = await loginRequest(user);
            console.log(res);
            setIsAuthenticated(true);
            setUser(res.data);
        } catch (error) { 
            if(Array.isArray(error.response.data)){
                return setErrors(error.response.data);
            }
            setErrors([error.response.data.message])
        }
    
    }

    const logout = ()=>{
        Cookies.remove("token");
        setIsAuthenticated(false);
        setUser(null);
    
    }

    // eliminar en 5 segundos los errores de no encontrado usuario etc.
    useEffect(()=> {
        if(errors.length > 0){
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000)
            return() => clearTimeout(timer);
        }
        
    }, [errors])




    // para cuando carge la app osea el usuario se loguee 
    useEffect(() => {
        async function checkLogin () {
            const cookies = Cookies.get();
            // console.log("jalando cookies ",cookies);

            if(!cookies.token){
                setIsAuthenticated(false);
                setLoading(false);
                return setUser(null);
            }
                try {
                    const res = await verifyTokenRequest(cookies.token)
                    // // console.log("err3")
                    // console.log(res.data);
                    if(!res.data) {
                        setIsAuthenticated(false)
                        setLoading(false);
                        setLoading(false);
                        return;
                    } 
                    
    
                    setIsAuthenticated(true);
                    setUser(res.data);
                    setLoading(false);
    
                } catch (error) {
                    // console.log(error);
                    setIsAuthenticated(false);
                    setUser(null);
                    setLoading(false); 
                } 
            
        
        }
        checkLogin();

    }, []);



    return (
            <AuthContext.Provider 
            value ={{
                signup, 
                signin,
                logout,
                loading,
                user,
                isAuthenticated,
                errors
            }}>
                {children}
            </AuthContext.Provider>
        );
};

// export default AuthContext;
