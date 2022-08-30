export default function Navbar() {
    return (
    <nav className="nav">
        <a href="/" className="site-title"> Home</a>
        <ul>
            <CumstomLink href="about">about</CumstomLink>
            <CumstomLink href="surf">surf</CumstomLink>
            <CumstomLink href="skate">skate</CumstomLink>
            <CumstomLink href="blog">blog</CumstomLink>
        </ul>
    </nav>
    )
}

function CumstomLink({href, children, ...props}) {
    const path = window.location.pathname

    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>{children}</a>
        </li>
    )
}