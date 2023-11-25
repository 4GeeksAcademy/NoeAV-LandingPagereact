import React from "react";

//create your first component
const Cards = () => {
    const list = [1,2,3,4]
	return (
 list.map(() => {
    return (
        <div className="card mx-1" styles={{width: "18rem"}}>
        <img src="https://picsum.photos/200" className="card-img-top" alt="..."/>
        <div className="card-body">
         <h5 className="card-title">Card title</h5>
         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <hr class="my-4"></hr>
         <a href="#" className="btn btn-primary" style={{display:"block"}}>find out more!</a>
        </div>
      </div>
    )
 })

	);
};

export default Cards;
 

