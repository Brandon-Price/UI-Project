import { FilterShelfContainer, FilterLabelContainer, FilterLabel, FilterShelf, FilterType, FilterName, PriceInput } from "../styles/Products.styles";

const FilterInput = ({value, onChange}) => {



    return (
        <FilterName>
            <input value = {value} 
                aria-label={"Filter by " + value}
                type="checkbox"
                onChange={onChange}/> {value}
        </FilterName>
    );
}

export default FilterInput;