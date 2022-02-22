import locationIcon from "../images/location-icon.png"

export default function Card({location}) {
  return (
    <div className="card">
      <img 
        src={require(`../images/${location.place}.jpg`)} 
        alt="" 
        className="card--image"
      />
      <div className="card--details">
        <img 
          src={locationIcon} 
          alt="" 
          className="card--icon"
        />
        <span className="card--country">{location.country}</span>
        <span>
          <a 
            href={location.mapLink} 
            className="card--link">
            View on Google Maps
          </a>
        </span>
        <h2 className="card--title">{location.place}</h2>
        <p className="card--date">{location.startDate} - {location.endDate}</p>
        <p className="card--description">{location.description}</p>
      </div>
    </div>
  )
}