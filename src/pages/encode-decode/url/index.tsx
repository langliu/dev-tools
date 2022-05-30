import { FC, useState } from 'react'
import { TextArea, Switch } from '@douyinfe/semi-ui'
import { IconCopy, IconClose, IconFile } from '@douyinfe/semi-icons'
import { clipboard } from '@tauri-apps/api'

import Title from '@/components/title'
import ToolBar from '@/components/tool-bar'
import ToolButton from '@/components/tool-button'
import Option from '@/components/option'
import styles from './index.module.css'

const URLPage:FC = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [open, setOpen] = useState<boolean>(true)

  const onChange = (newValue: string) :void => {
    setInput(newValue)
    setOutput(open ? encodeURI(newValue ?? '') : decodeURI(newValue ?? ''))
  }

  const onModeChange = (mode: boolean) :void => {
    const inputValue = input
    setInput(output)
    setOutput(inputValue)
    setOpen(mode)
  }

  const readTextFromClipboard = async () => {
    const text = await clipboard.readText() ?? ''
    onChange(text)
  }

  return (
    <div className={ styles.wrapper }>
      <Title title="URL 编码/解码工具" />
      <ToolBar label='配置' />
      <Option
        icon={ <IconCopy size={ 'large' } /> }
        subtitle='选择您想要使用的转换模式'
        title='转换' >
        { open ? '编码' : '解码' }
        <Switch aria-label="a switch for demo" checked={ open } onChange={ onModeChange } />
      </Option>
      <ToolBar
        extra={
          <>
            <ToolButton icon={ <IconCopy /> } onClick={ readTextFromClipboard }>粘贴</ToolButton>
            <ToolButton icon={ <IconFile /> }>打开文件</ToolButton>
            <ToolButton icon={ <IconClose /> } onClick={ () => onChange('') }>清空</ToolButton>
          </>
        }
        label="输入"
      />
      <TextArea className={ styles.field } value={ input } onChange={ onChange } />
      <ToolBar
        extra={
          <ToolButton
            icon={ <IconCopy /> }
            onClick={ () => clipboard.writeText(output) }
            >复制</ToolButton>
      }
        label="输出"
      />
      <TextArea className={ styles.field }value={ output } />
    </div>
  )
}

export default URLPage
