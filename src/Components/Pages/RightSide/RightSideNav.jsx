import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import FIndUsOn from './FIndUsOn'
import Qzone from './Qzone'

const RightSideNav = () => {
    return (
        <div className='space-y-8'>

            <div>
                <h2 className='text-3xl font-bold   pb-6'>Login With</h2>

                <div className='flex flex-col gap-2'>

                    <button className='btn btn-outline w-full text-blue-500 capitalize text-xl transition-all duration-300'><FcGoogle></FcGoogle>Google</button>

                    <button className='btn btn-outline w-full text-black capitalize text-xl transition-all duration-300'><FaGithub />Github</button>
                </div>
            </div>

            <div>
                <FIndUsOn></FIndUsOn>
            </div>

            <div>
                <Qzone></Qzone>
            </div>

        </div>
    )
}

export default RightSideNav