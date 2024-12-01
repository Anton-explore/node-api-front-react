import React from "react";
import DataImage from "../common/Image/Image";
import { Bootcamp } from "../../models/Bootcamp";
import { Link } from "react-router-dom";
import CourseView from "../Course/CourseView";


const BootcampView2: React.FC<{
  data: Bootcamp;
  isDeleting: boolean;
  onDelete: () => void;
  onUpdate: () => void;
}> = ({ data, onUpdate, isDeleting, onDelete }) => {

  return (
    <section className="bootcamp mt-5" key={data._id}>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1>{ data.name }</h1>
            <p>{ data.description }</p>
            <p className="lead mb-4">Average Course Cost: <span className="text-primary">${ data.averageCost }</span></p>

            {/* Courses */}
            {data.courses?.map(course => (
              <div key={course._id}>
                <CourseView course={course} />
              </div>
              // <div className="card mb-3">
              //   <h5 className="card-header bg-primary text-white">{course.title}</h5>
              //   <div className="card-body">
              //     <h5 className="card-title">Duration: {course.weeks} Weeks</h5>
              //     <p className="card-text">{course.description}</p>
              //     <ul className="list-group mb-3">
              //       <li className="list-group-item">Cost: ${course.tuition} USD</li>
              //       <li className="list-group-item">Skill Required: {course.minimumSkill}</li>
              //       <li className="list-group-item">Scholarship Available:
              //         <i className={`bi bi-check-lg ${data.housing ? 'text-success' : 'text-danger'}`}></i>
              //       </li>
              //     </ul>
              //   </div>
              // </div>
            ))}
            {/* <div className="card mb-3">
							<h5 className="card-header bg-primary text-white">Front End Web Development</h5>
							<div className="card-body">
								<h5 className="card-title">Duration: 8 Weeks</h5>
								<p className="card-text">This course will provide you with all of the essentials to become a successful frontend web developer. You will learn to master HTML, CSS and front end JavaScript, along with tools like Git, VSCode and front end frameworks like Vue</p>
								<ul className="list-group mb-3">
									<li className="list-group-item">Cost: $8,000 USD</li>
									<li className="list-group-item">Skill Required: Beginner</li>
									<li className="list-group-item">Scholarship Available: <i className="bi bi-check-lg text-success"></i> </li>
								</ul>
							</div>
						</div> */}

						{/* <div className="card mb-3">
								<h5 className="card-header bg-primary text-white">Full Stack Web Development</h5>
								<div className="card-body">
									<h5 className="card-title">Duration: 12 Weeks</h5>
									<p className="card-text">In this course you will learn full stack web development, first learning all about the frontend with HTML/CSS/JS/Vue and then the backend with Node.js/Express/MongoDB</p>
									<ul className="list-group mb-3">
										<li className="list-group-item">Cost: $10,000 USD</li>
										<li className="list-group-item">Skill Required: Intermediate</li>
										<li className="list-group-item">Scholarship Available: <i className="fas fa-times text-danger"></i> </li>
									</ul>
								</div>
						</div> */}
					</div>

          <div className="col-md-4">

            <DataImage photo={data.photo} />

            <h1 className="text-center my-4">
              <span className="badge badge-success rounded-circle p-3">
                {data.averageRating}
              </span> Rating
            </h1>

            <Link className="btn btn-dark btn-block my-3" to={`/reviews/${data._id}}`}>
              <i className="bi bi-chat-dots"></i>  Read Reviews
            </Link>   
            <Link className="btn btn-light btn-block my-3" to={`/reviews/add-review/${data._id}`}>
              <i className="bi bi-pencil"></i>  Write a Review
            </Link> 

            <a
              href={data.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-block my-3">
              <i className="bi bi-globe"></i>  Visit Website
            </a>

            <div id='map' style={{ width: '100%', height: '300px' }}></div>
            <ul className="list-group list-group-flush mt-4">
              <li className="list-group-item">
                <i className={`bi bi-check-lg ${data.housing ? 'text-success' : 'text-danger'}`}></i> Housing
              </li>
              <li className="list-group-item">
                <i className={`bi bi-check-lg ${data.jobAssistance ? 'text-success' : 'text-danger'}`}></i> Job Assistance
              </li>
              <li className="list-group-item">
                <i className={`bi bi-x-lg ${data.jobGuarantee ? 'text-success' : 'text-danger'}`}></i> Job Guarantee
              </li>
              <li className="list-group-item">
                <i className={`bi bi-check-lg ${data.acceptGi ? 'text-success' : 'text-danger'}`}></i> Accepts GI Bill
              </li>
            </ul>
            <button onClick={onUpdate}>Update</button>
            <button disabled={isDeleting} onClick={onDelete}>Delete</button>
          </div>
        </div>
      </div>
    </section>
  )
  // return (
  //   <>
  //     <div>
  //       <DataImage photo={data.photo} />
  //       <h4>Contact us</h4>
  //       <div className='app-flex'>
  //         <p>Email: { data.email }</p>
  //         <p>Phone: {data.phone}</p>
  //         <p>Website: { data.website }</p>
  //       </div>
  //     </div>
  //     <div>
  //       <h2>{data.name}</h2>
  //       <p>Description: {data.description}</p>
  //       <p>Careers: {data.careers.join(' | ')}</p>
  //       <div className='app-flex'>
  //         <p>Rating {data.averageRating}*</p>
  //         <p>Housing: {data.housing ? 'available' : 'unavailable'}</p>
  //         <p>Average cost: {data.averageCost }$</p>
  //       </div>
  //       <p>Created: {new Date(data.createdAt).toLocaleDateString('ru-RU')}</p>
  //       <h4>Job support</h4>
  //       <div className='app-flex'>
  //         <p>Help to find job: {data.jobAssistance ? 'YES' : 'NO'}</p>
  //         <p>Guaranteed employment: {data.jobGuarantee ? 'YES' : 'NO'}</p>
  //       </div>
  //       <button onClick={onUpdate}>Update</button>
  //       <button disabled={isDeleting} onClick={onDelete}>Delete</button>
  //     </div>
  //   </>
  // )
}

export default BootcampView2;


