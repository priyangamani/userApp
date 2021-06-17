import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import UserDetail from './components/userDetail/userDetail'

function App() {

  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    filterData(searchText);
  }, [searchText, data]);

  // handle change event of search input
  const handleChange = (value) => {
    setSearchText(value);
  };

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") {
      setFilteredList(data);
    } else {
      const filteredData = data.filter((item) => {
        return Object.keys(item).some((key) =>
          item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setFilteredList(filteredData);
    }
  };

  return (
    <div className="App" data-testid="container">
      <input
        data-testid="input-text"
        type="text"
        placeholder="Search ..."
        onChange={(e) => handleChange(e.target.value)}
      />
      {filteredList.map((details, idx) => (
        <UserDetail key={idx} {...details} />
      ))}
    </div>
  );
}

export default App;
