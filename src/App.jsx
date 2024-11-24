import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from 'react-router-dom';
import Root from './Root.jsx'
import {Home,Questions,Profile} from './pages/index.js';
import './App.css'
import { HelmetProvider } from 'react-helmet-async';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';

function App() {
  const error = ()=>{
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Oops! Something went wrong.</h1>
        <p>Please try again or go back to the homepage.</p>
      </div>
    );
  }

  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>} errorElement={error}>
        <Route path='' element={<Home/>}/>
        <Route path='/questions/:id' element={<Questions/>} loader={fetchQuestion}/>
        <Route path='/profile/:id' element={<Profile/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
      </Route>
    ),
    {
      future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      },
    },
    
  )

  
  return (
    <>
    <HelmetProvider>
      <RouterProvider router={router} future={{v7_startTransition: true,}}/>
    </HelmetProvider>
    </>
  )
}

export default App

const fetchQuestion = async ({ params }) => {
  const response = await fetch(`/api/questions/${params.id}`);
  return response.json();
}
