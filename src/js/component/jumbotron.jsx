import React from "react";

const Jumbotron = () => {
	return (
			<div class="card">
				{/* Jumbotron model */}
				<div class="jumbotron">
					<h1 class="display-4">A Warm Welcome!</h1>
					<p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
					<button className="btn btn-primary btn-lg" type="button"> Example button</button>
                    <hr class="my-4">

                    <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>   
						{/* <p class="lead">
						<a class="btn btn-primary" href="#" role="button">Learn more</a>
						</p> */}
					</hr>
				</div>
			</div>
	);
};

export default Jumbotron;