export const getStaticPaths = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();


    const paths = data.map(item => {
        return{
            params: {id: item.id.toString()}
        }
    })
    return {
       paths,
       fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await response.json();

    return{
        props: {item: data}
    }
}

const Details = ({item}) => {
    return ( 
        <div>
            <h1>{item.name}</h1>
            <p>{item.email}</p>
            <p>{item.website}</p>
        </div>
     );
}
 
export default Details;