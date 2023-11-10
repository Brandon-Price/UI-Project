import { FilterShelfContainer, FilterLabelContainer, FilterLabel, FilterShelf, FilterType, FilterName, PriceInput } from "../styles/Products.styles";

const FilterInput = ({value, onChange}) => {



    return (
        <FilterName>
            <input value = {value} 
                type="checkbox"
                onChange={onChange}/> {value}
        </FilterName>
    );
}

export default FilterInput;