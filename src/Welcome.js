import UserContext from './UserContext'
import { useContext } from 'react'
import Image from 'react-bootstrap/Image'

function Welcome() {
  let {name, avatar} = useContext(UserContext)

  return (
   <>
    <span>Welcome back, {name}!</span>
    <Image src={avatar} className="ms-3" height="32" roundedCircle />
   </>
  )
}
export default Welcome

