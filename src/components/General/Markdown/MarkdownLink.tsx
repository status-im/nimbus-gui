import { Link } from 'react-router-dom'

const MarkdownLink = (props: any) => {
  return (
    <Link to={props.href} target="_blank">
      {props.children}
    </Link>
  )
}

export default MarkdownLink
