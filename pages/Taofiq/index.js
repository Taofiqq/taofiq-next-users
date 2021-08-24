import Link from 'next/link'
export const getStaticProps = async () => {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json()

    return {
        props: {taofiq:data}
    }
}

const Test = ({taofiq}) => {
    return ( 
        <div>
           {taofiq.map((item) => (
               <Link href={`/Taofiq/${item.id}`} key={item.id}>
                   {item.name}
               </Link>
           ))}
        </div>
     );
}
 
export default Test;