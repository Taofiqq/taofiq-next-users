import Link from "next/link";
import {useEffect} from 'react';
import {useRouter} from 'next/router'

const NotFound = () => {
    
    const router  = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [router])
    return ( 
        <div>
            <h1>Sorry...The page could not be found</h1>
            <p>Go back to the  <Link href="/">Homepage</Link></p>
        </div>
     );
}
 
export default NotFound;