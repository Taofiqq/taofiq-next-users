import Link from 'next/link';
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/about.png" alt="about" width= {228} height= {100}/>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/Taofiq">Listing</Link>
        </nav>
     );
}
 
export default Navbar;