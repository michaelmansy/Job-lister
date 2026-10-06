// import { useState, useEffect } from "react"
import { useParams , useLoaderData} from "react-router-dom";
// import Spinner from '../components/Spinner'

export const jobLoader = async({params}) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
}


export default function JobPage() {
    const { id } = useParams();

    
    const job = useLoaderData();

    // const [job, setJob] = useState(null);

    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     const fetchJob = async() => {
    //         try{
    //             const res = await fetch(`/api/jobs/${id}`);
    //             const data = await res.json();
    //             console.log(data);
    //             setJob( data.data );
    //         }catch(error){
    //             console.log("Error while fetching data", error);
    //         }finally{
    //             setLoading(false);
    //         }
    //     }
    //     fetchJob();
    // }, [])

    return (
        <h1>{job.title}</h1>
    )
    

}
