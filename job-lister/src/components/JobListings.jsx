import { useState, useEffect } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';

export default function JobListings({isHome = false}) {

    const [jobs, setJobs] = useState([]);

    // show a loading spinner while its fetching data or if it fails
    const [loading, setLoading] = useState(true);

    // jobs.json has 6 jobs we will use only 3 to show
    
        //we no longer need the next line because we now use useState and useEffect
        // const jobList = isHome ? jobs.slice(0, 3) : jobs;     

    useEffect( () => {
        const fetchJobs = async () => {
            try{
                const res = await fetch('http://localhost:8000/jobs');
                const data = await res.json();
                setJobs(data);
            }catch(error){
                console.log("Error while fetching data", error);
            }finally{
                setLoading(false);
            }
        }

        fetchJobs();
    }, []);
   

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                {isHome ? 'Recent Jobs' : 'Browse All Jobs'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* adding the loading spinner */}
                    {loading ? (<Spinner loading={loading}/>) : (

                    <>
                    {jobs.map((job) => (
                        <JobListing key={job.id} job={job}/>
                    ))}
                    </>
                    )}
                        
                </div>
            </div>
        </section>
    )
}