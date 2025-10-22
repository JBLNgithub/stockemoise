const LoginInput = ({icon:Icon, ...props}) => {
  return (
    <div className="mb-4 text-center">
        <Icon className='inline mb-1 mr-2' />

        <input {...props} className="bg-blue-400 rounded-sm text-neutral-800 px-2" />
    </div>
  )
}

export default LoginInput