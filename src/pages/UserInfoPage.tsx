import { useParams } from 'react-router-dom'

export function UserInfoPage() {
  const { userId } = useParams()
  return (
    <>
      <h1>User Info</h1>
      <p>User ID: {userId}</p>
    </>
  )
}
