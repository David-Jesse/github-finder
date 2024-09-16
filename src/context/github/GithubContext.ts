import { createContext, useState, useEffect, ReactNode} from "react";
import { User, GithubContextType } from "../../components/shared/Types";


const GithubContext = createContext<GithubContextType | null>(null)

const VITE_GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const VITE_GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

export interface GithubProviderProps {
  children: ReactNode;
}

export const GithubProvider = ({children}: GithubProviderProps) => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers();
  }, [])

  const fetchUsers = async () => {
    const response = await fetch(`${VITE_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${VITE_GITHUB_TOKEN}`
      }
    })

    const data = await response.json();
    setUsers(data)
    setLoading(false)
  }

  return (
    <GithubContext.Provider
      value={{
        loading,
        users, 
    }}>
        {children}
    </GithubContext.Provider>
  )
}


// const GithubContext = createContext<User | null>(null)

// const VITE_GITHUB_URL = import.meta.env.VITE_GITHUB_URL
// const VITE_GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN 

// export const GithubProvider = ({children}) => {
//     const [users, setUsers] = useState<User[]>([])
//     const [loading, setLoading] = useState(true)


//     useEffect(() => {
//         fetchUsers()
//       }, [])
    
//       const fetchUsers = async () => {
//         const response = await fetch(`${VITE_GITHUB_URL}/users`, {
//           headers: {
//             Authorization: `token ${VITE_GITHUB_TOKEN}`
//           }
//         }
//       )
       
//       const data = await response.json()
    
//         setUsers(data)
//         setLoading(false)
//     }
    
//    return (
//     <GithubContext.Provider 
//       value={{
//         loading, 
//         users, 
//     }}>
//         {children}
//     </GithubContext.Provider>
//    )
// }

export default GithubContext;