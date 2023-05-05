const BottomSection =()=> {
    return (
        <section className="bottom-section">
        <div className="container">
            <div className="row justify-content-center justify-content-md-center">
                <div className="col-12 col-md-3">
                    <h1 className="h6 text-uppercase">About us</h1>
                    <div className="about">
                        <p className="content1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta sint unde.</p>
                        <p className="content2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit quasi aliquam ipsa enim natus illum, cum odit reprehenderit esse consequatur quis eligendi, quia et quos!</p>
                        <a className="about-link" href="#link">Read More</a>

                    </div>
                </div>
                <div className="col-12 col-md-3 mt-4 mt-md-0 blog">
                    <div className="blog">
                        <h1 className="h6 text-uppercase">Our Blog</h1>
                            <p>Lorem ipsum dolor sit.</p>
                            <p className="footer-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, delectus laboriosam magni ducimus ut iste soluta ipsa.</p>

                            <p>Lorem ipsum dolor sit.</p>
                            <p className="footer-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, delectus laboriosam magni ducimus ut iste soluta ipsa.</p>

                    </div>

                </div>
                <div className="col-12 col-md-3 mt-4 mt-md-0">
                    <h1 className="h6 text-uppercase">Our Flickr</h1>
                </div>

                <div className="col-12 col-md-3 mt-4 mt-md-0">
                    <h1 className="h6 text-uppercase">Get In Touch</h1>
                    <p className="footer-text contact-info">214 Giovanni Blvd.</p>
                    <p className="footer-text contact-info">Miami, FL 55404</p>
                    <p className="footer-text contact-info">Reservations: 777-777-7777</p>
                    <p className="footer-text contact-info">To-Go 888-888-8888</p>
                    <p className="footer-text contact-info">Management: 999-999-9999</p>
                    <p>Email: gioitalianvilla@food.com</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default BottomSection