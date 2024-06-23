import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
            <div className="sidebar-brand">
                <a className="brand-link" href="/dist/pages/">
                    <img src="/logo-senac.png" alt="SENAC Logo"
                         className="brand-image opacity-75 shadow"/>
                    <span className="brand-text fw-light">Dashboard</span>
                </a>
            </div>
            <div className="sidebar-wrapper" data-overlayscrollbars="host">
                <div data-overlayscrollbars-viewport="scrollbarHidden"
                     style={{
                         marginRight: "0px",
                         marginBottom: "0px",
                         marginLeft: "0px",
                         top: "0px",
                         right: "auto",
                         left: "0px",
                         width: "calc(100% + 0px)",
                         padding: "0px",
                         overflowY: "scroll",
                     }}>
                    <nav className="mt-2">
                        <ul className="nav sidebar-menu flex-column" data-lte-toggle="treeview" role="menu"
                            data-accordion="false">
                            <li className="nav-header">ACOMPANHAMENTO</li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/dist/pages/docs/introduction">
                                    <i className="nav-icon bi bi-speedometer"></i>
                                    <p>Dashboard</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/dist/pages/docs/introduction">
                                    <i className="nav-icon bi bi-info-circle"></i>
                                    <p>Informações</p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </aside>
    );
}