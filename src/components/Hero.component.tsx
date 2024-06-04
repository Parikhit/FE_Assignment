import DownloadButton from './DownloadButton.component';

const lists: { id: number; item: string }[] = [
    { id: 1, item: 'Same day treatment' },
    { id: 2, item: 'Board-certified practitioners' },
    { id: 3, item: 'Satisfaction guarantee' },
];

const Hero = () => (
    <>
        <div className='flex lg:flex-row flex-col items-center justify-between'>
            <section className='lg:w-1/2 flex flex-col gap-6 text-left'>
                <div className='flex flex-col justify-center gap-4'>
                    <h1 className='text-3xl sm:text-5xl md:text-5xl font-bold text-purple-900'>
                        Your favourite <br /> online clinic.
                    </h1>
                    <ol>
                        {lists.map((list) => {
                            const { id, item } = list;
                            return (
                                <li
                                    key={id}
                                    className='font-normal text-gray-600 text-left'
                                >
                                    {item}
                                </li>
                            );
                        })}
                    </ol>
                </div>
                <div className='flex flex-row gap-4 items-center text-left'>
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
                <div className='flex flex-row gap-4 items-center'>
                    <DownloadButton
                        className='flex items-center gap-2 px-4 py-2 text-purple-900 text-sm w-fit font-medium'
                        title='5 Million'
                        secondaryTitle='Downloaded'
                        icon='download-icon.png'
                    />
                    <DownloadButton
                        className='flex items-center gap-2 px-4 py-2 text-purple-900 text-sm w-fit font-medium'
                        title='4.8 (965k)'
                        secondaryTitle='Client Review'
                        icon='rating-icon.png'
                    />
                </div>
            </section>
            <section className='flex-1'>
                <div className='relative flex items-center justify-center w-[380px] h-[380px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px]'>
                    <img
                        className='opacity-35'
                        src='blob1.svg'
                        alt='background'
                    />
                    <div className='absolute'>
                        <img
                            src='Mobile image.svg'
                            alt='Our App'
                        />
                    </div>
                </div>
            </section>
        </div>

        <div className='flex lg:flex-row flex-col items-center justify-between'>
            <section className='flex-1'>
                <div className='relative flex justify-center w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px]'>
                    <img
                        className='opacity-35'
                        src='blob2.svg'
                        alt='background'
                    />
                    <div className='absolute w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h[300px]'>
                        <img
                            src='doctor-image.png'
                            alt='Our App'
                        />
                    </div>
                </div>
            </section>
            <section className='lg:w-1/2 flex flex-col gap-6 text-right'>
                <div className='flex flex-col justify-center gap-4'>
                    <p className='text-md font-medium text-purple-900'>Why simple is better</p>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-purple-900'>
                        Smart and affordable.
                    </h1>
                    <ol>
                        {lists.map((list) => {
                            const { id, item } = list;
                            return (
                                <li
                                    key={id}
                                    className='font-normal text-gray-600 text-right'
                                >
                                    {item}
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </section>
        </div>
    </>
);

export default Hero;
