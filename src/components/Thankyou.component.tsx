import { Link } from 'react-router-dom';

const Thankyou = () => {
    return (
        <div className='max-w-6xl h-[800px] mx-auto flex flex-col items-center justify-center gap-4'>
            <h1 className='text-xl font-medium'>Thank you for your time</h1>

            <Link to='/'>
                <button
                    type='button'
                    className='p-2 bg-purple-800 rounded-lg text-white'
                >
                    Go to Home Page
                </button>
            </Link>
        </div>
    );
};

export default Thankyou;
