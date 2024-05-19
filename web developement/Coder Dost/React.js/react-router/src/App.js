import { Link, NavLink, Route, Routes, useParams, Navigate } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/posts'>Posts</NavLink>
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/posts' element={<Posts />}></Route>
          <Route path='/post/:id' element={<Post />}></Route>
          <Route path='*' element={<NoPage />}></Route>
        </Routes>
      </header>
    </div>
  );
}

function Home() {
  return <h1>Home</h1>
}

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
      response.json().then(data => {
        setPosts(data.map(p =>
          <div key={p.id}>
            <Link to={'/post/' + p.id}> {p.id} : {p.title} </Link>
          </div>
        ))
      })
    })
  }, [])
  return (
    <div>
      <h1>Posts</h1>
      {posts}
    </div>
  )
}

function Post(props) {
  const [post, setPost] = useState('');
  const { id } = useParams();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id).then(response => {
      response.json().then(data => {
        setPost(data.body);
      })
    }
    )
  }, [id])
  return (
    <h1>{post}</h1>
  )
}

function NoPage() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <h4>Redirecting To HomePage...</h4>
      <Navigate to='/'></Navigate>
    </div>
  )
}

export default App;
