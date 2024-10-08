import {useEffect, useState} from 'react'
import { User } from '../../shared/Types'
import Spinner from '../Spinner'
import UserItem from './UserItem'

// type Props = {}

const UserResults = () => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`
      }
    }
  )
   
  const data = await response.json()

    setUsers(data)
    setLoading(false)
  }

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} login={''} avatar_url={''}/>
        ))}
      </div>
    )
  } else {
    return <Spinner/>
  }
}

export default UserResults