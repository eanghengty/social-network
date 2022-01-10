import React from 'react'
import './PostItem.css'
import Map from './Map'
import './Modal.css'
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
            <div className="col">
                <button  className="col-md-12 col-lg-3 col-12 btn-custom__1 btn btn-success" data-toggle="modal" data-target="#viewonmap">view on map</button>
                {/* modal component from modal class */}
                {/* <Modal coordinate={props.coordinate} address={props.address} description={props.description}></Modal> */}
                <div className="modal" id="viewonmap">
            
            <div className="container-fluid modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <div className="modal-title">{props.address}</div>
                </div>
                <div className="modal-body">
                    <Map center={props.coordinate} zoom={15}></Map>
                    {/* <h2>{props.coordinate}</h2> */}
                    {/* console.log({props.coordinate}) */}
                </div>
                <div className="modal-footer">
                    <button className="btn btn-success" data-dismiss="modal">close</button>
                </div>
            </div>
            </div>

        </div>
                <button to={`/${props.id}`} className="col-md-12 col-lg-3 col-12 btn-custom__1 btn btn-success">edit</button>
                <button className="col-md-12 col-lg-3 col-12 btn-custom__1 btn btn-success">delete</button>
                </div> 
        </li>
    )
}
export default PostItem