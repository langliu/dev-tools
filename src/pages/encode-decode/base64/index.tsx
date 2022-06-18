import { FC, useState } from 'react'
import { clipboard, dialog, fs } from '@tauri-apps/api'
import { IconClose, IconCopy, IconFile } from '@douyinfe/semi-icons'
import { Switch, TextArea } from '@douyinfe/semi-ui'
import { decode, encode } from 'js-base64'

import styles from '@/pages/encode-decode/html/index.module.css'
import Title from '@/components/title'
import ToolBar from '@/components/tool-bar'
import Option from '@/components/option'
import ToolButton from '@/components/tool-button'

const Base64TextPage:FC = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [open, setOpen] = useState<boolean>(true)

  const onChange = (newValue: string) :void => {
    setInput(newValue)
    setOutput(open ? encode(newValue ?? '') : decode(newValue ?? ''))
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

  const readFile = () => {
    dialog.open({
      filters: [{ extensions: ['html', 'txt'], name: '格式过滤' }],
      multiple: false
    }).then((filePath) => {
      console.log(filePath)
      if (typeof filePath === 'string') {
        fs.readTextFile(filePath).then((text) => {
          console.log(text)
          onChange(text)
        })
      }
    }).catch(() => {})
  }

  return (
    <div className={ styles.wrapper }>
      <Title title="Base64 文本编码/解码工具" />
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
            <ToolButton icon={ <IconFile /> } onClick={ readFile }>打开文件</ToolButton>
            <ToolButton icon={ <IconClose /> } onClick={ () => onChange('') }>清空</ToolButton>
          </>
        }
        label="输入"
      />
      <TextArea autosize showClear className={ styles.field } rows={ 10 } value={ input } onChange={ onChange } />
      <ToolBar
        extra={
          <ToolButton
            icon={ <IconCopy /> }
            onClick={ () => clipboard.writeText(output) }
          >复制</ToolButton>
        }
        label="输出"
      />
      <TextArea autosize className={ styles.field } value={ output } />
    </div>
  )
}

export default Base64TextPage
