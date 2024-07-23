import React from 'react';
import p from '../p.jpg'


const NewsItem = (props)=> {
 
        let {title , description , imageUrl ,newUrl,author,date} = props;
        

    
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src={imageUrl || p} alt="News"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className='card-text'><small className='text-muted'>By {author?author:"Unknown"} on<br/> {new Date(date).toGMTString()}</small></p>
                        <a href={newUrl}  className="btn btn-dark">Read More</a>
                    </div>

                 

                   
                </div>


            </div>


        )
    
}

export default NewsItem;
