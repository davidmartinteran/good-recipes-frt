import Image from 'next/image'
function HeaderInput() {
  return (
    <div className="flex align-bottom gap-2">
      <input className="pl-2 p-3 h-12 w-80 border rounded-md" type="text" placeholder="Qué te apetece hoy?" />
      <button className="grid place-content-center h-12 w-12 bg-amber-400 rounded-md"><Image src="./magnifier.svg" width={22} height={22} alt="search icon"/></button>
    </div>
  )
}

export default HeaderInput
