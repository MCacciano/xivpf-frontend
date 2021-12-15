import useIntent from '@/hooks/useIntent';

const Button = ({
  intent = 'none',
  type = 'button',
  className = '',
  children,
  ...props
}) => {
  const { bgColor, borderColor, textColor, hoverBgColor, hoverTextColor } =
    useIntent(intent);

  return (
    <button
      type={type}
      className={`rounded shadow py-1 px-2 ${bgColor} ${hoverBgColor} border ${borderColor} ${textColor} ${hoverTextColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
