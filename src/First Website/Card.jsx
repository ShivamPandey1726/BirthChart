import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Card.css';
const Card = (props) =>
{
    return(
        <div class="card">
            <img src={props.image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.content}</p>
                <a href="#" class="btn btn-primary">Explore More</a>
            </div>
        </div>
    );
}
export default Card;