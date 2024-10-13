import user from '../../../../assets/assets/user.png'
const Login = () => {
    return (
        <div className="flex justify-center items-center gap-2">
            <img
                className='w-8 h-8 rounded-full'
                src={user}
                alt="User avatar"
            />
            <button className='btn bg-black text-white w-24 hover:bg-gray-800 transition-colors'>
                Login
            </button>
        </div>
    );
};

export default Login;