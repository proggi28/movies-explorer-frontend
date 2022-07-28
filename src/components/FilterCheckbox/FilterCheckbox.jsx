import React from "react";
import './FilterCheckbox.css';
import { useState } from "react";

function FilterCheckbox() {
    const [isCheckbox, setCheckbox] = useState(true);

    const handleCheckboxClick = () => {
        setCheckbox(!isCheckbox);
    }

    return (
        <div className="search__checkbox">
            <div className={`checkbox__trigger ${!isCheckbox ? 'checkbox__trigger_disactive' : ''}`} onClick={handleCheckboxClick}>
            </div>
            <p className="checkbox__text">Короткометражки</p>
        </div>
    )
}

export default FilterCheckbox;