import { useQuery, gql } from "@apollo/client"
import { Link } from "react-router-dom";


const headerContent = gql`
query {
    header(id: 1) {
      data {
        id
        attributes {
          active
          headers{
            Logo{
              data{
                attributes{
                  url
                  alternativeText
                }
              }
            }
            Menu {
              id
              Text
              Link
            }
            cta {
              Text
              Link
            }
          }
        }
      }
    }
  }
`

export const Header = () => {
    const { loading, error, data } = useQuery(headerContent);
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
    
    const logoURL = data.header.data.attributes.headers[data.header.data.attributes.active].Logo.data.attributes.url
    const logoAlt = data.header.data.attributes.headers[data.header.data.attributes.active].Logo.data.attributes.alternativeText
    const menu = data.header.data.attributes.headers[data.header.data.attributes.active].Menu

    return (
        <header className='flex flex-col items-center justify-center'>
            <img src={`${import.meta.env.VITE_CMS_URL}${logoURL}`} className="App-logo" alt={logoAlt} width={256} />
            <nav className="text-3xl font-bold text-gray-500">
                {menu.map((item: any) => (
                    <Link key={item.id} to={item.Link} className="p-4">{item.Text}</Link>
                ))}
            </nav>
        </header>
    )
}
