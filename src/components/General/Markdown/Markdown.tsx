import ReactMarkdown from 'react-markdown'

import MarkdownLink from './MarkdownLink'

type MarkdownProps = {
  children: string
}

const Markdown = ({ children }: MarkdownProps) => {
  return <ReactMarkdown children={children} components={{ a: MarkdownLink }} />
}

export default Markdown
