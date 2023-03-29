import React from 'react';

const MySelect = ({options}) => {
    return (
        <select>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;