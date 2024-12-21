import { useState, useEffect } from 'react'
import Login from './components/login'
import Register from './components/register'
import axios from 'axios';
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const [name, setName] = useState('nikhil')
  const [email, setEmail] = useState('nikhil@gmail.com')
  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then((response) => { console.log(response.data) })
      .catch((error) => console.error(error))
  }, [])

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('submitting');
  //   console.log(name, email);
  //   axios.post("http://localhost:3000/users", {
  //     name,
  //     email
  //   })
  //   .then((response) => { console.log(response) })
  //   .catch((error) => console.error(error))
  // }
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Dashboard} />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
