import ReactMarkdown from 'react-markdown'
import styles from './../../../pages/ValidatorOnboarding/ValidatorSetup/ValidatorInstalling/InstallLayout.module.css'
import MarkdownLink from './MarkdownLink'

type MarkdownProps = {
  children: string
}


const Markdown = ({ children }: MarkdownProps) => {
  return (
    <ReactMarkdown
      children={children}
      components={{ a: MarkdownLink }}
      className={styles['markdown-text']}
    />
  )
}

export default Markdown
