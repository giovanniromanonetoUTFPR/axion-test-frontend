//CSS import
import './style.css'

//Component imports
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';

export function Pessoas() {
    const people = [
        { name: "Gaga", link: "http://localhost:1337/uploads/gaga_405ebcb7bb.jpg" },
        { name: "Obama", link: "http://localhost:1337/uploads/obama_e1c9e0b42c.jpg" },
        { name: "Senna", link: "http://localhost:1337/uploads/senna_2b875227a7.jpg" },
        { name: "Serena", link: "http://localhost:1337/uploads/serena_23db5caa3b.jpg" },
        { name: "Steve", link: "http://localhost:1337/uploads/steve_0649679aea.jpg" },
    ];
    return (
        <>
            <Header />
            <div className="container">
                <div className="conteudoContainer">
                    <span>LIST OF PEOPLE</span>
                    <div className="linha"></div>
                    <div className="cardsContainer">
                        {people.map((value) => {
                            return (
                                <Card key={value.name} title={value.name} image={value.link} />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
