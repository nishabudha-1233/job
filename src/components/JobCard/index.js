import {Link} from 'react-router-dom'
import {BsFillBriefcaseFill, BsStarFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'

const JobCard = props => {
  const {jobData} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = jobData
  return (
    <Link to={`/jobs/${id}`} className="link-item">
      <li className="job-item">
        <div className="logo-title-location">
          <div className="logo-title-container">
            <img
              src={companyLogoUrl}
              alt="company-logo"
              className="company-logo"
            />
            <div className="title-rating-container">
              <h1>{title}</h1>
              <div>
                <BsStarFill className="rating-icon" />
                <p>{rating}</p>
              </div>
            </div>
          </div>
          <div className="location-package">
            <div>
              <div>
                <MdLocationOn className="location-icon" />
                <p>{location}</p>
              </div>
              <div className="employe-container">
                <BsFillBriefcaseFill className="brife-case-icon" />
                <p>{employmentType}</p>
              </div>
            </div>
            <p>{packagePerAnnum}</p>
          </div>
        </div>
        <hr className="line" />
        <h1>Description</h1>
        <p>{jobDescription}</p>
      </li>
    </Link>
  )
}

export default JobCard
