import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

function CountryDetails() {
  const [countryDetails, setCountryDetails] = useState(null);

  const param = useParams();

  useEffect(() => {
    getData();
  }, [param.alpha3Code]);

  // llamamos otra vez a la Api
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${param.alpha3Code}`
      );
      console.log(response);
      setCountryDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // clausula para el problemilla
  if (countryDetails === null) {
    return <h3>Cargando...</h3>;
  }

  const countryCode = countryDetails.alpha2Code.toLowerCase();

  return (
    <>
      <h2>Country details</h2>
      <p>
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${countryCode}.png`}
          width={150}
        />
      </p>
      <h4>{countryDetails.name.official}</h4>
      <hr />
      <p>Capital: {countryDetails.capital}</p>
      <hr />
      <p>Area: {countryDetails.area} km2</p>
      <hr />
      <p>Borders: </p>

      {countryDetails.borders.map((eachBorder) => {
        // Itera sobre cada elemento del array y luego ejecuta la funcion
        return (
          <>
            <Link to={`/${eachBorder}`}>
              <li>{eachBorder}</li>
            </Link>
          </>
        );
      })}
      <hr />
    </>
  );
}

export default CountryDetails;
