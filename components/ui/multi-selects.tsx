// ReusableMultiSelect.js

import React from 'react';
import { MultiSelect } from 'primereact/multiselect';

const ReusableMultiSelect = ({
    value,
    options,
    onChange,
    optionLabel,
    placeholder,
    disabled = false,
}: MutliSelectProps) => {
    return (
        <div className="w-full">
            <MultiSelect
                value={value}
                display="chip"
                options={options}
                disabled={disabled}
                onChange={onChange}
                placeholder={placeholder}
                optionLabel={optionLabel}
                className="
                 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
                "
            />
        </div>
    );
};

export default ReusableMultiSelect;
