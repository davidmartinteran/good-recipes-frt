function InputRange(
  {min = 0, max = 1000, step = 50}: {min?: number, max?: number, step?: number}
){
  return (
    <div>
      <input className="w-full" type="range" min={min} max={max} step={step} list="tickmarks"/>
      <datalist id="tickmarks">
        <option value="0" label="0%"></option>
        <option value="100"></option>
        <option value="200"></option>
        <option value="300"></option>
        <option value="400"></option>
        <option value="500"></option>
        <option value="600"></option>
        <option value="700"></option>
        <option value="800"></option>
        <option value="900"></option>
        <option value="1000+"></option>
      </datalist>
      <label></label>
    </div>
  )
}

export default InputRange