import Image from 'next/image'


export default function Header() {
    return (
        <nav className="app-header navbar navbar-expand bg-body"> {/*begin::Container*/}
            <div className="container-fluid"> {/*begin::Start Navbar Links*/}
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" data-lte-toggle="sidebar" href="#" role="button">
                        <i
                            className="bi bi-list"></i> </a></li>
                    {/*<li className="nav-item d-none d-md-block"><a href="#" className="nav-link">Home</a></li>*/}
                    {/*<li className="nav-item d-none d-md-block"><a href="#" className="nav-link">Contact</a></li>*/}
                </ul>
                {/*end::Start Navbar Links*/} {/*begin::End Navbar Links*/}
                <ul className="navbar-nav ms-auto"> {/*begin::Navbar Search*/}
                    {/*<li className="nav-item">*/}
                    {/*    <a className="nav-link" data-widget="navbar-search" href="#" role="button">*/}
                    {/*        <i className="bi bi-search"></i>*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                    {/*end::Navbar Search*/}
                    {/*begin::Messages Dropdown Menu*/}
                    <li className="nav-item dropdown">
                        {/*<a className="nav-link" data-bs-toggle="dropdown" href="#">*/}
                        {/*    <i className="bi bi-chat-text"></i> <span*/}
                        {/*    className="navbar-badge badge text-bg-danger">3</span>*/}
                        {/*</a>*/}
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                            <a href="#"
                               className="dropdown-item"> {/*begin::Message*/}
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <Image src="/avatar/avatar1.png"
                                               alt="User Avatar"
                                               className="img-size-50 rounded-circle me-3" width={128} height={128}/>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h3 className="dropdown-item-title">
                                            Brad Diesel
                                            <span className="float-end fs-7 text-danger"><i
                                                className="bi bi-star-fill"></i></span>
                                        </h3>
                                        <p className="fs-7">Call me whenever you can...</p>
                                        <p className="fs-7 text-secondary"><i className="bi bi-clock-fill me-1"></i> 4
                                            Hours
                                            Ago
                                        </p>
                                    </div>
                                </div>
                                {/*end::Message*/}
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item"> {/*begin::Message*/}
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <Image src="/avatar/avatar1.png"
                                               alt="User Avatar"
                                               className="img-size-50 rounded-circle me-3" width={128} height={128}/>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h3 className="dropdown-item-title">
                                            John Pierce
                                            <span className="float-end fs-7 text-secondary"> <i
                                                className="bi bi-star-fill"></i> </span>
                                        </h3>
                                        <p className="fs-7">I got your message bro</p>
                                        <p className="fs-7 text-secondary"><i className="bi bi-clock-fill me-1"></i> 4
                                            Hours Ago
                                        </p>
                                    </div>
                                </div>
                                {/*end::Message*/}
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item"> {/*begin::Message*/}
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <Image src="/avatar/avatar1.png"
                                               alt="User Avatar"
                                               className="img-size-50 rounded-circle me-3" width={128} height={128}/>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h3 className="dropdown-item-title">
                                            Nora Silvester
                                            <span className="float-end fs-7 text-warning"> <i
                                                className="bi bi-star-fill"></i> </span>
                                        </h3>
                                        <p className="fs-7">The subject goes here</p>
                                        <p className="fs-7 text-secondary"><i className="bi bi-clock-fill me-1"></i> 4
                                            Hours Ago
                                        </p>
                                    </div>
                                </div>
                                {/*end::Message*/}
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
                        </div>
                    </li>
                    {/*end::Messages Dropdown Menu*/}
                    {/*begin::Notifications Dropdown Menu*/}
                    {/*<li className="nav-item dropdown">*/}
                    {/*    <a className="nav-link" data-bs-toggle="dropdown" href="#">*/}
                    {/*        <i className="bi bi-bell-fill"></i>*/}
                    {/*        <span className="navbar-badge badge text-bg-warning">15</span>*/}
                    {/*    </a>*/}
                    {/*    /!*<div className="dropdown-menu dropdown-menu-lg dropdown-menu-end"><span*!/*/}
                    {/*    /!*    className="dropdown-item dropdown-header">15 Notifications</span>*!/*/}
                    {/*    /!*    <div className="dropdown-divider"></div>*!/*/}
                    {/*    /!*    <a href="#" className="dropdown-item"> <i className="bi bi-envelope me-2"></i> 4 new*!/*/}
                    {/*    /!*        messages*!/*/}
                    {/*    /!*        <span className="float-end text-secondary fs-7">3 mins</span> </a>*!/*/}
                    {/*    /!*    <div className="dropdown-divider"></div>*!/*/}
                    {/*    /!*    <a href="#" className="dropdown-item"> <i className="bi bi-people-fill me-2"></i> 8 friend*!/*/}
                    {/*    /!*        requests*!/*/}
                    {/*    /!*        <span className="float-end text-secondary fs-7">12 hours</span> </a>*!/*/}
                    {/*    /!*    <div className="dropdown-divider"></div>*!/*/}
                    {/*    /!*    <a href="#" className="dropdown-item"> <i className="bi bi-file-earmark-fill me-2"></i> 3*!/*/}
                    {/*    /!*        new*!/*/}
                    {/*    /!*        reports*!/*/}
                    {/*    /!*        <span className="float-end text-secondary fs-7">2 days</span> </a>*!/*/}
                    {/*    /!*    <div className="dropdown-divider"></div>*!/*/}
                    {/*    /!*    <a href="#" className="dropdown-item dropdown-footer">*!/*/}
                    {/*    /!*        See All Notifications*!/*/}
                    {/*    /!*    </a>*!/*/}
                    {/*    /!*</div>*!/*/}
                    {/*</li>*/}
                    {/*end::Notifications Dropdown Menu*/} {/*begin::Fullscreen Toggle*/}
                    {/*<li className="nav-item">*/}
                    {/*    <a className="nav-link" href="#" data-lte-toggle="fullscreen">*/}
                    {/*        <i data-lte-icon="maximize" className="bi bi-arrows-fullscreen"></i>*/}
                    {/*        <i data-lte-icon="minimize" className="bi bi-fullscreen-exit" style={{display: 'none'}}></i>*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                    {/*end::Fullscreen Toggle*/} {/*begin::User Menu Dropdown*/}
                    <li className="nav-item dropdown user-menu">
                        <a href="#" className="nav-link dropdown-toggle"
                           data-bs-toggle="dropdown">
                            <Image src="/avatar/avatar1.png"
                                   alt="User Avatar"
                                   className="rounded-circle me-3" width={32} height={32}/>
                            <span className="d-none d-md-inline">Mercado de trabalho</span> </a>
                        <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                            {/*begin::User Image*/}
                            <li className="user-header text-bg-primary">
                                <Image src="/avatar/avatar1.png"
                                       alt="User Avatar"
                                       className="img-size-50 rounded-circle me-3" width={128} height={128}/>
                                <p>
                                    Mercado de tabalho - SENAC DN
                                    <small></small>
                                </p>
                            </li>
                            {/*end::User Image*/} {/*begin::Menu Body*/}
                            {/*<li className="user-body"> /!*begin::Row*!/*/}
                            {/*    <div className="row">*/}
                            {/*        <div className="col-4 text-center"><a href="#">Followers</a></div>*/}
                            {/*        <div className="col-4 text-center"><a href="#">Sales</a></div>*/}
                            {/*        <div className="col-4 text-center"><a href="#">Friends</a></div>*/}
                            {/*    </div>*/}
                            {/*    /!*end::Row*!/*/}
                            {/*</li>*/}
                            {/*end::Menu Body*/} {/*begin::Menu Footer*/}
                            {/*<li className="user-footer"><a href="#" className="btn btn-default btn-flat">Profile</a> <a*/}
                            {/*    href="#"*/}
                            {/*    className="btn btn-default btn-flat float-end">Sign*/}
                            {/*    out</a></li>*/}
                            {/*/!*end::Menu Footer*!/*/}
                        </ul>
                    </li>
                    {/*end::User Menu Dropdown*/}
                </ul>
                {/*end::End Navbar Links*/}
            </div>
            {/*end::Container*/}
        </nav>
    );
}