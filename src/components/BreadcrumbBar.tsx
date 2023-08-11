import './breadcrumbbar.css'

function BreadcrumbBar(){
    return(
        <nav className="breadcrumb-bar-nav">
            <ul className="breadcrumb-bar-ul">
                <li className="breadcrumb-bar-li">Nodes</li>
                <li className="breadcrumb-bar-li">Nimbus</li>
                <li className="breadcrumb-bar-li">Connect Device</li>
            </ul>
        </nav>
    )
}

export default BreadcrumbBar