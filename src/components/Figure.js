const Figure =(props)=> {
    return (
        <div className="col-md-4">
            <figure className="figure hero-figure">
                <img src={`images/${props.img}`} alt={props.title} className="img-fluid" width = "400"/>
                <figcaption className="figure-caption title text-uppercase">{props.title}</figcaption>
                <figcaption className="figure-caption subcaption text-uppercase">{props.subcaption}</figcaption>
            </figure>
        </div>
    )
}

export default Figure