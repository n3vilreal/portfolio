export default function Overview() {
  return (
  <div className='flex flex-col md:flex-row w-full pt-10'>
    <div className='Left h-auto md:h-screen w-full md:w-[384px] flex items-center flex-col md:ml-12'>
            <div className='profile-photo'>
                <img src="https://avatars.githubusercontent.com/u/168754188?v=4" className='h-96 rounded-full border-gray-500 border-2' />
            </div>
            <div className='name text-white flex flex-col self-start mt-4'>
                <span className='text-3xl font-semibold'>Nebil Khanal</span>
                <span className='text-2xl text-gray-400'>n3vilreal</span>
            </div>
            <div className='time'>

            </div>

        </div>
        <div className='Right'>

        </div>
    </div>
  )
}
