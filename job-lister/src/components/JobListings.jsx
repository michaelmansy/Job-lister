import jobs from '../jobs.json'
import JobListing from './JobListing';

export default function JobListings({isHome = false}) {

    // jobs.json has 6 jobs we will use only 3 to show
    
        const jobList = isHome ? jobs.slice(0, 3) : jobs;

   

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                {isHome ? 'Recent Jobs' : 'Browse All Jobs'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {jobList.map((job) => (
                        <JobListing key={job.id} job={job}/>
                    ))}
                        
                </div>
            </div>
        </section>
    )
}