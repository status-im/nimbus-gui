import ReactMarkdown from 'react-markdown'

import MarkdownLink from './MarkdownLink'
import MarkdownText from './MarkdownText'

type MarkdownProps = {
  children: string
}

const Markdown = ({ children }: MarkdownProps) => {
  return <ReactMarkdown children={children} components={{ a: MarkdownLink, p: MarkdownText }} />
}

export default Markdown
