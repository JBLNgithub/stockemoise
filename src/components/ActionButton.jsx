const ActionButton = ({label, action}) => {
  return (
    <button className="bg-blue-800 hover:bg-blue-400 text-neutral-200 hover:text-neutral-800 text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block" onClick={action}>{label}</button>
  )
}

export default ActionButton