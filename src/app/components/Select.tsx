type Props = {
    id: number,
    description: string
  };

function Select(
    {options}: {options: Props[]}
  ){
    return (
      <select>
        {
            options.map(option => (
                <option key={option.id}>{option.description}</option>
            ))
        }
      </select>
    )
  }
  
  export default Select