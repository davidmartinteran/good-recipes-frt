type Props = {
  label: string,
  children: JSX.Element,
};
function FilterField({label, children}: Props) {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      {children}
    </div>
    
  )
}

export default FilterField
