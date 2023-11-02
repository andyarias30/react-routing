import { useEffect , useState} from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home(){
    const [LoggedIn , setLoggedIn] =  useState(false)
    useEffect(() => {
       const userLS =  localStorage.getItem('myUser')
        console.log('userLS ->', userLS)
       if (userLS){
        setLoggedIn(true)
       }
    },[])
    return(
        <>
       <h2>Home</h2>
       {LoggedIn && <button onClick={() => localStorage.clear()}>Logout</button>}
        </>

    )
}