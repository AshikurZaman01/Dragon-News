import moment from 'moment'
import logo from '../../../../assets/assets/logo.png'

const Header = () => {
    return (
        <div>

            <div className='text-center space-y-1'>
                <img src={logo} className=" text-center mx-auto " alt="" />
                <p className='text-gray-500 '>Journalism Without Fear or Favour</p>
                <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>

        </div>
    )
}

export default Header