import { FC, FormEvent, useState } from 'react'
import { TextArea } from '@douyinfe/semi-ui'
import { encodeHTML } from 'entities'
import Title from '@/components/title'
import styles from './index.module.css'

const HTMLPage:FC = () => {
  const [output, setOutput] = useState('')

  const onChange = (newValue: string, event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) :void => {
    setOutput(encodeHTML(newValue ?? ''))
  }

  return (
    <div>
      <Title title="HTML 编码/解码工具" />
      <TextArea className={styles.field} maxCount={8} onChange={onChange} />
      <TextArea maxCount={8} value={output} />
    </div>
  )
}

export default HTMLPage
