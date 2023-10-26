import ReactMarkdown from 'react-markdown'

const Markdown = ({ children }) => {
  return <ReactMarkdown children={children} components={{ a: Linkk }} />
}

export default Markdown
