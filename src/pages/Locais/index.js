//CSS import
import './style.css'

//Component imports
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';

export function Locais() {
    const places = [
        { name: "Tokyo", link: "http://localhost:1337/uploads/tokyo_1f8708aaa8.jpg" },
        { name: "Amsterdam", link: "http://localhost:1337/uploads/amsterdam_ec820dc8f0.jpg" },
        { name: "Lisbon", link: "http://localhost:1337/uploads/lisbon_84e0522920.jpg" },
        { name: "Barcelona", link: "http://localhost:1337/uploads/barcelona_328e395026.jpg" },
        { name: "Paris", link: "http://localhost:1337/uploads/paris_5878adf80b.jpg" },
        { name: "Moscow", link: "http://localhost:1337/uploads/moscow_384ff25016.jpg" },
        { name: "Rio de Janeiro", link: "http://localhost:1337/uploads/rio_de_janeiro_942f226b9a.jpg" },
        { name: "Ireland", link: "http://localhost:1337/uploads/ireland_f77d88bc76.jpg" },
    ];
    return (
        <>
            <Header />
            <div className="container">
                <div className="conteudoContainer">
                    <p>LIST OF PLACES</p>
                    <div className="linha"></div>
                    <div className="cardsContainer">
                        {places.map((value) => {
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
