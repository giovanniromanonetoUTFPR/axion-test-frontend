//CSS import
import './style.css';

export function Card(props) {
    const divStyle = {
        backgroundImage: `url('${props.image}')`,
        backgroundSize: 'cover'
    }
    return (
        <div className="cardContainer" style={divStyle}>
            <p>{props.title}</p>
        </div>
    );
};
