import Link from "next/link"
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFound(){
    const router =useRouter();
    useEffect(()=>{
        setTimeout(()=>{
                router.push("/")
        },5000)
    },[])
    return (
        <>
        <h2>Oop's something bad happened :(</h2>
        <h3>Go back to <Link href="/">Homepage </Link></h3>
        </>
    )
}