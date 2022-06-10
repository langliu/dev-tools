import { FC } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Layout from '../layout'
import MD5Page from '../pages/md5'
import URLPage from '../pages/encode-decode/url'
import HTMLPage from '@/pages/encode-decode/html'
import HomePage from '@/pages/home'

function NoMatch () {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}

const RootRoute:FC = () => {
  return (
    <Routes>
      <Route element={ <Layout /> } path="/">
        <Route index element={ <MD5Page /> } />
        <Route element={ <MD5Page /> } path="md5" />
        <Route element={ <URLPage /> } path="url" />
        <Route element={ <HTMLPage /> } path="html" />
        <Route element={ <HomePage /> } path="home" />
        <Route element={ <NoMatch /> } path="*" />
      </Route>
    </Routes>
  )
}

export default RootRoute
