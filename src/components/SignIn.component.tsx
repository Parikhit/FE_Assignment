import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();
    return (
        <main className='max-w-6xl mx-auto flex flex-col items-center gap-10'>
            <div className='w-full flex justify-start'>
                <button
                    type='button'
                    onClick={() => navigate('/')}
                    className='bg-purple-800 px-3 py-2 rounded-md text-white font-semibold mb-2'
                >
                    &lt; Go Back
                </button>
            </div>

            <div className='w-4/5 h-[30rem] border bg-gray-100'>
                <h1 className='text-2xl p-6 mt-3'>Customer Login</h1>
                <form className='flex flex-col justify-center items-center w-full h-full gap-6'>
                    <input
                        type='email'
                        placeholder='Email address'
                        className='px-4 py-2 border w-3/5 m-0 rounded-md'
                        required
                    />
                    <input
                        type='password'
                        placeholder='password'
                        className='px-4 py-2 border w-3/5 m-0 rounded-md'
                        required
                    />

                    <button
                        onClick={() => navigate('/questions')}
                        type='submit'
                        className='bg-purple-800 text-white p-2 w-3/5 text-xl rounded-lg mt-8'
                    >
                        Start Exam
                    </button>
                </form>
            </div>

            <div>
                <p>Privacy policy / Terms and conditions</p>
            </div>
        </main>
    );
};

export default SignIn;
