import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from '@douyinfe/semi-ui'

import Sidebar from './Sidebar'
import styles from './index.module.css'

const RootLayout:FC = () => {
  return (
    <Layout>
      <Sidebar />
      <Layout.Content className={styles.main}>
        <Outlet />
      </Layout.Content>
    </Layout>
  )
}

export default RootLayout
