import ListGroup from "react-bootstrap/ListGroup";
// Importaciones
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [allCountries, setAllCountries] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  // Como llamar a la API?
  const getData = async () => {
    try {
      const response = await axios.get(
        " https://ih-countries-api.herokuapp.com/countries"
      );
      setAllCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Clausula para evitar el error
  if (allCountries === null) {
    return <h3>Un segundiño..</h3>;
  }

  // Orden alfabetico
  const sortedCountries = allCountries.slice().sort((a, b) => { // Utilizamos slice para hacer una copia, y sort para ordenarlos.
    return a.name.official.localeCompare(b.name.official); // Para comparar dos strings con las reglas del Idioma, video Bailando.
  });

  return (
    <>
      <h2>WikiCountries: Your Guide to the World!</h2>
      <ListGroup>
        {sortedCountries.map((eachCountry) => {
          const countryAlphaCode = eachCountry.alpha2Code.toLowerCase();
          return (
            <>
              <ListGroup.Item key={eachCountry.name.official} action>
                <Link
                  to={`/${eachCountry.alpha3Code}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${countryAlphaCode}.png`}
                    width={50}
                  />
                  <p>{eachCountry.name.official}</p>
                </Link>
              </ListGroup.Item>
            </>
          );
        })}
      </ListGroup>
    </>
  );
}

export default HomePage;
