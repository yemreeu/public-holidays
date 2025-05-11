import React, { useEffect, useState } from "react";
import { fetchCountries } from "./api/fetchCountries";
import PublicHolidayList from "./components/PublicHolidayList";

type Country = {
  isoCode: string;
  name: {
      language: string;
      text: string;
  }[];
  officialLanguages: string[];
};

const App = () => {
  const [countries, setCountries] = useState<string[]>([]);
  const [country, setCountry] = useState('NL');
  useEffect(() => {
    const loadCountries = async () => {
      const result = await fetchCountries();
      const countries = result.map((country: Country) => country.name[0].text)
      setCountries(countries);
    };

    loadCountries();
  }, []);

  const handleChange = (e: any) => {
    setCountry(e.target.value);
  };
  return (
    <div>
      <h1>Public Holidays</h1>
      <div>
        <select value={country} onChange={handleChange} defaultValue={countries.find((c) => c === 'Netherlands (the)')}>
          <option value="">Please Select Country</option>
          {countries.map((country, index) => (
            <option value={country} key={index}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div style={{marginTop: '10px'}}>
        {/* <PublicHolidayList countryCode={countryCode}/> */}
      </div>
    </div>
  );
};

export default App;
