import './breadcrumbbar.css'

type BreadcrumbBarProps = {
  breadcrumbList: string[]
}

function BreadcrumbBar({ breadcrumbList }: BreadcrumbBarProps) {
  return (
    <nav className="breadcrumb-bar-nav">
      <ul className="breadcrumb-bar-ul">
        {breadcrumbList.map(item => (
          <li className="breadcrumb-bar-li">{item}</li>
        ))}
      </ul>
    </nav>
  )
}

export default BreadcrumbBar
