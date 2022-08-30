import flower from './../resourses/surflook.jpg';
import ster from './../resourses/ster.jpg';
import sterre from './../resourses/sterre.jpg';
import banner from './../resourses/banner.jpg';
export default function Home() {
    return (<>

    <img src={banner} class="banner"></img>

    <div class="textHolder">
        <h2>Welcome to my personal website!</h2>
        <p>------------ Recent blogs -----------</p>
    </div>
    
    <div class="cardContainer">
        <CustomCard src={flower} tag="tag tag-teal" title="surf" time="reading time: about 5 minutes">My windsurf journey...</CustomCard>
        <CustomCard src={ster} tag="tag tag-purple" title="skate" time="reading time: about 5 minutes">Skateboarding: how it started...</CustomCard>
        <CustomCard src={sterre} tag="tag tag-pink" title="Art" time="reading time: about 5 minutes">In this blog I will tell you everything about my art...</CustomCard>
    </div>

    <p>------ Skate - Surf - Art ------</p>

    </>)
}

function CustomCard({title, tag, src, time, children}) {
    const path = window.location.pathname

    return (
        <div class="card">
            <div class="card-header">
                <img src={src} alt="image"/>
            </div>
            <div class="card-body">
                <span class={tag}>{title}</span>
                <h3>{children}</h3>
                <p>{time}</p>
                <h3>2022-08-30</h3>
            </div>
        </div>
    )
}