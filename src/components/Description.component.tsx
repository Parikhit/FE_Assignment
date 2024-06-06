import DownloadButton from './DownloadButton.component';

const Description = () => {
    return (
        <main className='max-w-6xl mx-auto flex flex-col gap-6 mb-80 sm:mb-2'>
            <div className='flex flex-col gap-3 p-2'>
                <p className='text-gray-500 font-semibold'>How it works</p>
                <h1 className='text-2xl md:text-3xl font-bold text-purple-800'>
                    A Step by step guide. <br /> Your 24/7 online clinic
                </h1>
            </div>

            <div className='flex items-center justify-between border border-purple-800 p-2 rounded-lg gap-2'>
                <div className='w-1/2'>
                    <img
                        src='man-1.jpg'
                        alt='person'
                        width={400}
                        height={400}
                        className='rounded-lg w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] object-contain'
                    />
                </div>

                <div className='w-1/2 flex flex-col gap-4'>
                    <p className='font-semibold text-gray-500'>Step 1</p>
                    <h2 className='text-2xl font-bold text-purple-800'>Answer a few questions</h2>

                    <p className='sm:text-lg font-semibold text-gray-500'>
                        We guide through questions online that are straightforward and easy to
                        answer. We also ask about your symptoms, medications and allergies too.
                    </p>
                </div>
            </div>

            <div className='flex items-center justify-between border border-purple-800 p-2 rounded-lg gap-2'>
                <div className='w-1/2 flex flex-col gap-4'>
                    <p className='font-semibold text-gray-500'>Step 2</p>
                    <h2 className='text-2xl font-bold text-purple-800'>
                        Diagnosis by real people, really fast
                    </h2>

                    <p className='sm:text-lg font-semibold text-gray-500'>
                        Board-certified Nurse Practitioners review your answers right away. They
                        make the diagnosis and recommend the care you'll need. If prescriptions are
                        in the plan, they'll send to your favourite pharmacy.
                    </p>
                </div>
                <div className='w-1/2'>
                    <img
                        src='doc-3.jpg'
                        alt='person'
                        width={400}
                        height={400}
                        className='rounded-lg w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] object-contain'
                    />
                </div>
            </div>

            <div className='flex items-center justify-between border border-purple-800 p-2 rounded-lg gap-2'>
                <div className='w-1/2'>
                    <img
                        src='doc-2.jpg'
                        alt='person'
                        width={400}
                        height={400}
                        className='rounded-lg w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] object-contain'
                    />
                </div>

                <div className='w-1/2 flex flex-col gap-4'>
                    <p className='font-semibold text-gray-500'>Step 3</p>
                    <h2 className='text-2xl font-bold text-purple-800'>Payment & Insurance</h2>

                    <p className='sm:text-lg font-semibold text-gray-500'>
                        Just enter your credit card and insurance you have. We'll submit the
                        insurance claim for you. Your insurance company responds and we charge the
                        remainder with or without insurance you're never charged more than $59.
                    </p>
                </div>
            </div>

            <div className='flex items-center justify-between border border-purple-800 p-2 rounded-lg gap-2'>
                <div className='w-1/2 flex flex-col gap-4'>
                    <p className='font-semibold text-gray-500'>Step 4</p>
                    <h2 className='text-2xl font-bold text-purple-800'>Start feeling better</h2>

                    <p className='sm:text-lg font-semibold text-gray-500'>
                        That's it! in about an hour, you'll get a text and email the second your
                        treatment plan is ready. Question the nurse practitioners that are available
                        by phone to help. Follow-up is free.
                    </p>
                </div>

                <div className='w-1/2'>
                    <img
                        src='man-2.jpg'
                        alt='person'
                        width={400}
                        height={400}
                        className='rounded-lg w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] object-contain'
                    />
                </div>
            </div>

            <div className='flex items-center justify-between border border-purple-800 p-2 rounded-lg gap-2'>
                <div className='w-1/2'>
                    <img
                        src='trust.jpg'
                        alt='person'
                        width={400}
                        height={400}
                        className='rounded-lg w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] object-contain'
                    />
                </div>

                <div className='w-1/2 flex flex-col items-center gap-4'>
                    <p className='sm:text-xl font-semibold text-gray-500'>Quality by design</p>
                    <h2 className='text-2xl font-bold text-purple-800'>Safe and secure</h2>

                    <p className='sm:text-lg font-semibold text-gray-500'>
                        We're setting the highest quality standards for the industry. And your
                        information is protected at every step. The result - treatment and services
                        for care you can trust!
                    </p>
                    <button
                        type='button'
                        className='p-3 border border-purple-800 text-purple-800 w-fit rounded-lg'
                    >
                        Learn More
                    </button>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row items-center justify-between p-4 h-[400px] mb-6'>
                <div className='flex flex-col gap-4 sm:w-1/2'>
                    <p className='text-xl text-purple-800 font-semibold'>We're here to help</p>
                    <h1 className='text-2xl md:text-3xl font-bold text-purple-800'>
                        Ready to give us a try?
                    </h1>
                    <p className='text-lg font-semibold text-gray-500'>
                        While you don't need insurance to use borcelle, it can often bring the cost
                        lower. And alongside our satisfaction guarantee is our promise that if
                        borcelle can't treat you, there's no charge.
                    </p>

                    <div className='flex justify-start gap-4 items-center text-left my-4'>
                        <DownloadButton
                            className='flex items-center gap-2 px-4 py-2 rounded-full bg-purple-800 text-white hover:opacity-90 text-xs w-fit'
                            title='Download on the'
                            secondaryTitle='App Store'
                            icon='apple-logo.png'
                        />
                        <DownloadButton
                            className='flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-purple-900 hover:opacity-90 text-xs w-fit font-semibold'
                            title='Get it from'
                            secondaryTitle='Google Play'
                            icon='google-play-store-logo.png'
                        />
                    </div>
                </div>
                <div className='relative sm:w-1/2 flex items-center justify-center'>
                    <img
                        src='blob3.svg'
                        alt='blob'
                        width={100}
                        height={100}
                        className='w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] opacity-40'
                    />

                    <img
                        className='absolute w-[200px] md:w-[300px]'
                        src='app.png'
                        alt='app'
                    />
                </div>
            </div>
        </main>
    );
};

export default Description;
