import DownloadButton from './DownloadButton.component';

const list1: { id: number; item: string }[] = [
    { id: 1, item: 'Same day treatment' },
    { id: 2, item: 'Board-certified practitioners' },
    { id: 3, item: 'Satisfaction guarantee' },
];

const list2: { id: number; logo: string; title: string; description: string }[] = [
    {
        id: 1,
        logo: '24-7.png',
        title: 'Always available',
        description: 'Skip the trip and start your visit any time.',
    },
    {
        id: 2,
        logo: 'money.svg',
        title: "A price that doesn't hurt",
        description: 'Your visit is $59 and even less with insurance.',
    },
    {
        id: 3,
        logo: 'treatment.png',
        title: 'Prescriptions & treatment plans',
        description: "You'll get a customized treatment plans & prescriptions.",
    },
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
                        {list1.map((list) => {
                            const { id, item } = list;
                            return (
                                <li
                                    key={id}
                                    className='text-gray-500 font-semibold'
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
                <div className='w-full flex flex-col justify-center gap-4'>
                    <p className='text-md text-left font-medium text-purple-900'>
                        Why simple is better
                    </p>
                    <h1 className='text-2xl text-left sm:text-3xl md:text-4xl font-bold text-purple-900'>
                        Smart and affordable.
                    </h1>
                    <ul className='p-4'>
                        {list2.map((list) => {
                            const { id, logo, title, description } = list;
                            return (
                                <li
                                    key={id}
                                    className='flex items-center text-left font-normal text-gray-600 m-4'
                                >
                                    <div>
                                        <img
                                            src={logo}
                                            alt='logo'
                                            width={60}
                                            height={60}
                                        />
                                    </div>
                                    <div className='ml-2'>
                                        <h2 className='text-lg text-purple-800 font-bold'>
                                            {title}
                                        </h2>
                                        <p className='text-gray-500 font-semibold'>{description}</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>
        </div>
    </>
);

export default Hero;
