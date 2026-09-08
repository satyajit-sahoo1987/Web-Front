export default function CountryCard({
  name,
  flag,
  population,
  region,
  capital
}) {
  return (
    <a className="country-card" href="#">

      <div className="flag-container">
        <img src={flag} alt={name+'flag'}></img>
        {/* TODO: Display the country flag */}
      </div>

      <div className="card-text">

        {/* TODO: Display country name */}
        <h3 className="card-title">{name}</h3>

        {/* TODO: Display population */}
        <p>
          <b>Population:{population} </b>
        </p>

        {/* TODO: Display region */}
        <p>
          <b>Region:{region} </b>
        </p>

        {/* TODO: Display capital */}
        <p>
          <b>Capital:{capital} </b>
        </p>

      </div>
    </a>
  )
}
