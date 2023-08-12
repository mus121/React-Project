import React from 'react'

const Newsitem=(props)=> {
    let{title,description,imgurl,newsurl,author,date,source}=props;
    return (
      <div className='container my-3'>
       <div className="card">
        <div style={{display:'flex',justifyContent:'flex-end', position:'absolute',
      right:'0'}}>
       <span className=" badge rounded-pill bg-danger" >{source} </span>
       </div>
  <img src={!imgurl?"https://www.cnet.com/a/img/resize/0df24ae21cd4b44c317fc3ea6f731307bc55b4c2/hub/2023/07/25/f12705ed-06c9-43a7-a88c-adecb884be26/gettyimages-1565639837.jpg?auto=webp&fit=crop&height=675&width=1200":imgurl}/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date (date).toTimeString()} </small></p>
    <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
export default Newsitem
