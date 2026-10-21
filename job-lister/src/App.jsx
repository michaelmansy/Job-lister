import { Route, createBrowserRouter , createRoutesFromElements , RouterProvider} from 'react-router-dom'

import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';



export default function App(){

  // Add Job function that will be passed down to the AddJobPage component
  const addJob = async (newJob) => {
    // this is a post request so we need to pass in a second argument to fetch that is an object with the method and body
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
    return res.json();
}


// Delete Job function that will be passed down to the JobPage component
const deleteJob = async (id) => {
  const res = await fetch(`/api/jobs/${id}`, {
    method: 'DELETE',
  });

  // 1. Check if the network request failed (e.g., 404 or 500)
  if (!res.ok) {
    throw new Error(`Failed to delete job: ${res.statusText}`);
  }

  // 2. If the server returns a 204 (No Content), return a placeholder success object
  if (res.status === 204) {
    return { success: true };
  }

  // 3. Read the body as text first to safely check if it's empty
  const text = await res.text();
  return text ? JSON.parse(text) : { success: true };
};



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>} />
      <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

  return <RouterProvider router={router} />
  
}