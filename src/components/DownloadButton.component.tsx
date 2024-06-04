type Props = {
    className?: string;
    title: string;
    secondaryTitle?: string;
    icon?: string;
};

const DownloadButton = ({ className, title, secondaryTitle, icon }: Props) => {
    return (
        <button
            className={className}
            type='button'
        >
            {icon && (
                <img
                    src={icon}
                    alt='logo'
                    width={30}
                    height={30}
                />
            )}
            <div className='flex flex-col items-center'>
                {title}
                {secondaryTitle && <div className='font-semibold text-md'>{secondaryTitle}</div>}
            </div>
        </button>
    );
};

export default DownloadButton;
