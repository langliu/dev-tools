import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from './Sidebar'
import styles from './index.module.css'

const Layout:FC = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
