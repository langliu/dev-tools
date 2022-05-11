import { FC } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Layout from '../layout'
import MD5Page from '../pages/md5'
import URLPage from '../pages/encode-decode/url'
import HTMLPage from '../pages/encode-decode/html'

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
      <Route path="/" element={<Layout />}>
        <Route index element={<MD5Page />} />
        <Route path="md5" element={<MD5Page />} />
        <Route path="url" element={<URLPage />} />
        <Route path="html" element={<HTMLPage />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}

export default RootRoute
