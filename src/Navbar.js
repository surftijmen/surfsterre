export default function Navbar() {
    const path = window.location.pathname
    return (
    <nav className="nav">
        <a href="/" className="site-title">Surfsterre</a>
        <ul>
            <CumstomLink>about</CumstomLink>
            {/* <CumstomLink>surf</CumstomLink> */}
        </ul>
    </nav>
    )
}

function CumstomLink({href, children, ...props}) {
    return (
        <li>
            <a href={href} {...props}>{children}</a>
        </li>
    )
}