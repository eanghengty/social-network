import React from 'react'
import '../components/NewPost.css'
const NewPost=()=>{
    return(
        <form className="container-main container mt-4 " onSubmit={(event)=>event.preventDefault()}>
            <div className="form-group">
                <label for="title">Title</label>
                <input type="text" className="form-control-title form-control form-control-lg"></input>
            </div>
            <div className="form-group mt-3">
                <label for="description">Description</label>
                <textArea id="description" className="form-control form-control-description " rows="4"></textArea>
            </div>
            <div className="form-group mt-3">
                <label className="d-inline-block" for="image">select image</label>
                <input type="file" className="form-control-file form-control d-inline-block " id="image"></input>
                
            </div>
            <div className="form-group-address container d-inline-block mt-3 ">
                <label className="d-block" for="address">Address</label>
                <input type="text" className="form-control-address d-block form-control-lg"></input>
            </div>
            <div className="form-group__add-post  mt-3 d-inline-block">
            <label className="label-hidden  d-block">s</label>
            <button className="btn-add-post btn btn-success d-block">Add Post</button>
            </div>
        </form>
    )
}
export default NewPost