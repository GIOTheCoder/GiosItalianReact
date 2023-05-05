const SearchBar =()=> {
    return (
        <div className="search">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 text-center text-md-start">
                    <p className="slogan">
                        The taste of luxury!
                    </p>
                </div>
                <div className="col-12 col-md-6">
                        <nav className="navbar justify-content-center justify-content-md-end">
                        <form className="form-inline">
                            <div className="d-flex">
                                <input clasNames="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>

                            </div>
                        </form>
                        
                        </nav>
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default SearchBar