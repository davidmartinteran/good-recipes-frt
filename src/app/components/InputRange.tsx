"use client"
import { FormEvent } from "react"

function InputRange(
  {value, handleValue, min = 0, max = 1000, step = 50}: {value: number, handleValue: Function, min?: number, max?: number, step?: number}
){

  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    handleValue(event.currentTarget.value)

  }

  return (
    <div className="flex gap-5">
      <input className="w-full" type="range" onChange={handleInputChange} value={value} min={min} max={max} step={step} list="tickmarks" />
      <datalist id="tickmarks">
        <option value={0}></option>
        <option value={100}></option>
        <option value={200}></option>
        <option value={300}></option>
        <option value={400}></option>
        <option value={500}></option>
        <option value={600}></option>
        <option value={700}></option>
        <option value={800}></option>
        <option value={900}></option>
        <option value={1000}></option>
      </datalist>
      <input type="number" value={value} onChange={handleInputChange} className="w-14 border-2 rounded-lg border-black px-1" />
    </div>
  )
}

export default InputRange