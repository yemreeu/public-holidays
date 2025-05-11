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
  const [countries, setCountries] = useState<Country[]>([]);
  const [country, setCountry] = useState('NL');
  useEffect(() => {
    const loadCountries = async () => {
      const result = await fetchCountries();
      setCountries(result);
    };

    loadCountries();
  }, []);

  const handleChange = (e: any) => {
    console.log('e', e.target.value);
    setCountry(e.target.value);
  };
  return (
    <div>
      <h1>Public Holidays</h1>
      <div>
        <select value={country} onChange={handleChange}>
          <option value="">Please Select Country</option>
          {countries.map((country, index) => (
            <option value={country.isoCode} key={index}>
              {country.name[0].text}
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
