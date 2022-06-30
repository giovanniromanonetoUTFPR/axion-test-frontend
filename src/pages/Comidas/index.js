//CSS import
import './style.css'

//Component imports
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';

export function Comidas() {
    const food = [
        { name: "Apple", link: "http://localhost:1337/uploads/apple_2a4e3d2732.jpg" },
        { name: "Avocado", link: "http://localhost:1337/uploads/avocado_ed89caad18.jpg" },
        { name: "Cake", link: "http://localhost:1337/uploads/cake_2181cc58fc.jpg" },
        { name: "Pasta", link: "http://localhost:1337/uploads/pasta_f4346e1e87.jpg" },
        { name: "Rice", link: "http://localhost:1337/uploads/rice_9c4e4a41b4.jpg" },
        { name: "Steak", link: "http://localhost:1337/uploads/steak_e554543ffd.jpg" },
    ];
    return (
        <>
            <Header />
            <div className="container">
                <div className="conteudoContainer">
                    <span>LIST OF FOODS</span>
                    <div className="linha"></div>
                    <div className="cardsContainer">
                        {food.map((value) => {
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
