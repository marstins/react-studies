import locationIcon from "../images/location-icon.png"

export default function Card(props) {
  const journal = {...props.location};
  
  return (
    <div className="card">
      <img 
        src={require(`../images/${journal.place}.jpg`)} 
        alt="" 
        className="card--image"
      />
      <div className="card--details">
        <img 
          src={locationIcon} 
          alt="" 
          className="card--icon"
        />
        <span className="card--country">{journal.country}</span>
        <span>
          <a 
            href={journal.mapLink} 
            className="card--link">
            View on Google Maps
          </a>
        </span>
        <h2 className="card--title">{journal.place}</h2>
        <p className="card--date">{journal.startDate} - {journal.endDate}</p>
        <p className="card--description">{journal.description}</p>
      </div>
    </div>
  )
}