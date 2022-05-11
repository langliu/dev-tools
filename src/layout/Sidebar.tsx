import { FC } from 'react'
import { Nav, INavLinkGroup, INavStyles } from '@fluentui/react'

const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    height: '100vh',
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto'
  }
}

const Sidebar:FC = () => {
  const groups: INavLinkGroup[] = [
    {
      name: '编码/解码类型工具',
      expandAriaLabel: 'Expand Extended components section',
      collapseAriaLabel: 'Collapse Extended components section',
      links: [
        {
          name: 'HTML',
          url: 'html',
          key: 'html'
        },
        {
          name: 'URL',
          url: '/url',
          key: 'url'
        },
        {
          name: 'MD5',
          url: '/md5',
          key: 'md5'
        }
      ],
      isExpanded: true
    }
  ]
  return (
    <div>
      <Nav groups={groups} styles={navStyles}></Nav>
    </div>
  )
}

export default Sidebar
