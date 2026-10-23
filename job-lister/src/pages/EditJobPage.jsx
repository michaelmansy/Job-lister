import { useParams , useLoaderData, useNavigate} from "react-router-dom";


export default function EditJobPage(){

    const job = useLoaderData();


    return (
        <div>{job.title}</div>
    )
}