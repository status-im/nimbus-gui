import './BreadcrumbBar.css'

type BreadcrumbBarProps = {
  breadcrumbList: string[]
}

const BreadcrumbBar = ({ breadcrumbList }: BreadcrumbBarProps) => {
  return (
    <nav className="breadcrumb-bar-nav">
      <ul className="breadcrumb-bar-ul">
        {breadcrumbList.map((item, index) => (
          <li className="breadcrumb-bar-li" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default BreadcrumbBar
