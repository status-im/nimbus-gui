import { Link } from 'react-router-dom'

const MarkdownLink = (props: any) => {
  return (
    <Link to={props.href} target="_blank" style={{ color: '#647084', textDecoration: 'underline' }}>
      {props.children}
    </Link>
  )
}

export default MarkdownLink
