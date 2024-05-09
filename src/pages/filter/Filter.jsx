import React from "react";
// import SearchInputField from "../SearchInputField";
import ExperienceDropdown from "../experience-dropdown/ExperienceDropdown";
import MinBasePayDropdown from "../minBase-pay-dropdown/MinBasePayDropdown";
import LocationDropdown from "../location-dropdown/LocationDropdown";
import "./Filter.css";
import SearchInput from "../../components/search-input-field/SearchInputField";

const Filter = ({
  setSearchString,
  setExperienceFilter,
  setMinBasePayFilter,
  setLocationFilter,
}) => {
  const onSearch = (searchString) => {
    setSearchString(searchString);
  };
  return (
    <div className="filter-container">
      <SearchInput onSearch={onSearch} />
      <ExperienceDropdown setExperienceFilter={setExperienceFilter} />
      <MinBasePayDropdown setMinBasePayFilter={setMinBasePayFilter} />
      <LocationDropdown setLocationFilter={setLocationFilter} />
    </div>
  );
};

export default Filter;
