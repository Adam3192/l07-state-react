import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import UserContext from './UserContext'
import { useContext } from 'react'

function Home() {
  let user = useContext(UserContext)

  return (
   <UserContext.Consumer>
{() => (
      <Alert variant="success">Welcome back, {user.name}!</Alert>
      <Card className="text-center col-md-10 mx-auto my-3">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>This is Our Featured Item</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Text>
          <Button variant="primary">Click Here</Button>
        </Card.Body>
      </Card>
)
}
      </UserContext.Consumer>
  )
}

export default Home

