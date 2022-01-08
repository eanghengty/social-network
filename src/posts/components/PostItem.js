import React from 'react'
import './PostItem.css'
const PostItem=(props)=>{
    return(
        <li className="li-custom text-center list-group-item p-2 mb-3">
            <div className='w-100 h-40 '>
                <img  className="image-custom d-inline-block w-100 h-25 border rounded-0" src={props.image} alt={props.title}></img>
                </div> 
            <div>
                <h2 className="custom-h2 text-capitalize">{props.title}</h2>
                <h3 className="custom-h3">{props.address}</h3>
                <p>{props.description}</p>
                </div>   
            <div>
                <button>view on map</button>
                <button>edit</button>
                <button>delete</button>
                </div> 
        </li>
    )
}
export default PostItem