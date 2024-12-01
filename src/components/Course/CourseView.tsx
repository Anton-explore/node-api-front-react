
import React from 'react'
import { Course } from '../../models/Course'
import { Link } from 'react-router-dom'


const CourseView: React.FC<{ course: Course}> = ({ course }) => {
  return (
    <div className="card mb-3">
			<Link to={`/courses/${course._id}`}>
				<h5 className="card-header bg-primary text-white">
					{course.title}
				</h5>
			</Link>
			<div className="card-body">
				<h5 className="card-title">Duration: {course.weeks} Weeks</h5>
				<p className="card-text">{course.description}</p>
				<ul className="list-group mb-3">
					<li className="list-group-item">Cost: ${course.tuition} USD</li>
					<li className="list-group-item">Skill Required: {course.minimumSkill}</li>
					<li className="list-group-item">Scholarship Available:
						<i className={`bi bi-check-lg ${course.scholarshipAvailable ? 'text-success' : 'text-danger'}`}></i>
					</li>
				</ul>
			</div>
		</div>
  )
}


export default CourseView