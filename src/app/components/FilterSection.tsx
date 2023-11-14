"use client"
import { useState } from 'react';
import FilterField from './FilterField'
import InputRange from './InputRange'

function FilterSection() {

  const [maxCaloriesValue, setMaxCaloriesValue] = useState(0);
  const [kindsOfDish, setKindsOfDish] = useState([]);

  const handleSubmit = () => {
    console.log('Handling submit')
  }

  return (
    <aside className="max-w-xs">
      <form onSubmit={handleSubmit}>  
        <FilterField label="Calorías máximas">
          <InputRange value={maxCaloriesValue} handleValue={setMaxCaloriesValue}/>
        </FilterField>
        <FilterField label="Tipo de plato">
          
        </FilterField>
      </form>
    </aside>
  )
}

export default FilterSection
