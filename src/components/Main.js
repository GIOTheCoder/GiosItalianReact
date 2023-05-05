import SearchBar from "./SearchBar"
import Carousel from "./Carousel"
import HeroBottom from "./HeroBottom"
import Figure from "./Figure"
import data from "../data.json"

const Main =()=> {
    const figureComponents = data.map(item => {
        return <Figure 
            key = {item.id}
            img = {item.img}
            title = {item.title}
            subcaption = {item.subcaption}
        />
    })
    return (
        <main className="main"> 
            <SearchBar />
            <Carousel />

            <section className="figure-section">
            <div className="container">
                <div className="row">
                    {figureComponents}
                </div>
            </div>

            </section>

            <HeroBottom />
        </main>
    )
}

export default Main