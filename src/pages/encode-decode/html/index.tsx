import { FC, FormEvent, useState } from 'react'
import { TextField } from '@fluentui/react'
import { encodeHTML } from 'entities'
import Title from '@/components/title'
import styles from './index.module.css'

const HTMLPage:FC = () => {
  const [output, setOutput] = useState('')

  const onChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) :void => {
    setOutput(encodeHTML(newValue ?? ''))
  }

  return (
    <div>
      <Title title="HTML 编码/解码工具" />
      <TextField className={styles.field} label="输入" multiline rows={8} onChange={onChange} />
      <TextField label="输出" multiline rows={8} value={output} />
    </div>
  )
}

export default HTMLPage
