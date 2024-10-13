import img1 from '../../../assets/assets/qZone1.png'
import img2 from '../../../assets/assets/qZone2.png'
import img3 from '../../../assets/assets/qZone3.png'

const Qzone = () => {
    return (
        <div>

            <div>
                <h2 className='text-3xl font-bold pb-6'>Q Zone</h2>

                <div>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt='' />
                </div>

            </div>

        </div>
    );
}

export default Qzone;
