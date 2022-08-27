import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox({ value, onChange }) {
    return (
        <div className="checkbox">
            <label className="checkbox-label">
                <input type="checkbox"
                    checked={value}
                    onChange={onChange}
                    className="checkbox__trigger" />
                <span className="checkbox__round"></span>
            </label>
            <p className="checkbox__text">Короткометражки</p>
        </div>
    )
}

export default FilterCheckbox;