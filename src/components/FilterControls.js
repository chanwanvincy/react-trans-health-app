import { useState, useEffect } from "react";

export default function FilterControls() {
    const [filters, setFilters] = useState([])

    return (
        <div className="filters-controls">
            <input type="checkbox" name="" id="" /><label htmlFor="">Allied Health</label>
        </div>

    );
}
