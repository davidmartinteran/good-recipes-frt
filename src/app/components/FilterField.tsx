type Props = {
  label: string,
  children: JSX.Element,
};
function FilterField({label, children}: Props) {
  return (
    <div className="flex flex-col">
      <label className="text-xl font-bold mb-4">{label}</label>
      {children}
    </div>
    
  )
}

export default FilterField
