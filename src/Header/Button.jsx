const Button = () => {
    const handleClick = () => {
        alert('Button clicked!');
    };
    return (
<button
            className='px-3 py-1.5 text-xs font-medium text-white duration-200 bg-blue-600 rounded-md md:text-sm hover:bg-blue-700'
            onClick={handleClick}
>
            Get Started
</button>
    );
};
export default Button;