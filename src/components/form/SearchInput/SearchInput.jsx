// import { icons } from "utils/constants";
import "./SearchInput.scss";

const SearchInput = ({ placeholder, value, onChange, className }) => {
  return (
    <div id="search-input-container">
      <input
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        className={className}
      />
      {/* <img src={icons.search} alt="search" className="searc-icon-block" /> */}
    </div>
  );
};
export default SearchInput;
