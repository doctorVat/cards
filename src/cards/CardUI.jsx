import React from 'react'
// import i from '../assets/1.jpg'
import '../cards/Card-style.css'

const Card = props => {
    return (
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="img1" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis et, possimus vero sapiente itaque eligendi ab sunt corrupti cumque eaque.
                </p>
                <a href="#" className='btn btn-outline-success'>Anyway</a>
            </div>
        </div>
    );
}

export default Card