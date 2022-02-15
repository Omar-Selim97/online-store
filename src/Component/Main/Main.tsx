import React from "react";
import {IV as IProps} from '../../App'

const Main:React.FC<IProps> = ({list}) => {
  
  return (
    <main className="block col-2">
      <h2 className="mb-3">
        Product
      </h2>
    <div className="g">
      
      {list.map((item,index)=>{
      
        return(
         
          <div  className="col-sm-12 col-md-6 col-lg-4" key={item.id}>
                  <div >
                          <img className="small" alt={item.title} src={item.image}/>
                      
                          <h3>{item.title}</h3>
                          <p className="card-text lead">
                              {item.price}
                          </p>
                        
                    <button className="mb-3">Add To Cart</button>
                 </div>
          </div>
         

        )
        
  })}
  </div>
    </main>
  );
};

export default Main;
