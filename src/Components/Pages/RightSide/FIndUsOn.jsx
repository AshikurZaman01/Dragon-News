import { CiInstagram } from "react-icons/ci"
import { FaFacebook, FaInstagram } from "react-icons/fa"
import { FiTwitter } from "react-icons/fi"
import { Link } from "react-router-dom"

const FIndUsOn = () => {
    return (
        <div>

            <div>
                <h2 className='text-3xl font-bold   pb-6'>Find Us On</h2>

                <div className="space-y-4">
                    <Link className="p-4 flex items-center text-lg border rounded-tl-lg border-gray-500 ">
                        <FaFacebook className="mr-3"></FaFacebook>
                        <span> Facebook</span>
                    </Link>

                    <Link className="p-4 flex items-center text-lg border rounded-tl-lg border-gray-500 ">
                        <FaInstagram className="mr-3"></FaInstagram>
                        <span> Instagram</span>
                    </Link>

                    <Link className="p-4 flex items-center text-lg border rounded-tl-lg border-gray-500 ">
                        <FiTwitter  className="mr-3"></FiTwitter>
                        <span> Twitter</span>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default FIndUsOn