import useFetch from './hooks/useFetch';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Home, Process, Contact } from './routes';
import { Header } from './components';

const client = new ApolloClient({
  uri: `${import.meta.env.VITE_CMS_URL}/graphql`,
  cache: new InMemoryCache()
})

function App() {
  const { data, loading, error } = useFetch(`${import.meta.env.VITE_CMS_URL}/api/headers/1`);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-[#DCCCB3]">
        <p className='text-white'>Loading...</p>
      </div>
    )
  } 
  if (error) {
    console.log(error)
    return <p className='text-red'>Error...</p>
  }

  console.log(`Active header: ${data.data.attributes.active}`);
  return (
    <div className='App flex flex-col items-center justify-center h-screen w-screen bg-[#DCCCB3]'>
      <ApolloProvider client={client}>
          <Router>
          <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/process' element={<Process />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </Router>
      </ApolloProvider>
    </div>
  )
}

export default App;