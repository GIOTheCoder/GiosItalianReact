import { BsGoogle, BsFacebook, BsTwitter, BsLinkedin, BsPinterest} from "react-icons/bs"




const TopNav =()=> {
    return (
        <section className="top-nav">

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar justify-content-center justify-content-md-end">
                        
                        <a href="#link" className="nav-item social-link icon"> <BsGoogle /></a>
                        
                        
                        <a href="#link" className="nav-item social-link icon"><BsFacebook /></a>
                        
                        
                        <a href="#link" className="nav-item social-link icon"><BsTwitter /></a>
                        
                        
                        <a href="#link" className="nav-item social-link icon"><BsLinkedin/> </a>
                        
                        
                        <a href="#link" className="nav-item social-link icon"><BsPinterest /></a>
                        
                    </nav>
                    
                </div>
            </div>
        </div>
    
    </section>
    )
}

export default TopNav