const BottomNav =()=> {
    return (
        <section className="bottom-nav">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 text-center text-md-start">
                        <h1 className="h5 brand">GIO's Italian Villa</h1>
                    </div>
                    <div className="col-12 col-md-8">
                        <nav className="navbar justify-content-center justify-content-md-end">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">About</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Events</a>
                                </li>
                                <li className="nav-item">
                                    <a href="menu.html" className="nav-link">Menu</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Gallery</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Contacts</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Blog</a>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BottomNav