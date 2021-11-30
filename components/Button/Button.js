import useIntent from '@/hooks/useIntent';

const Button = ({
  intent = 'none',
  type = 'button',
  className = '',
  children,
  ...props
}) => {
  const { bgColor, borderColor, textColor } = useIntent(intent);

  return (
    <button
      type={type}
      className={`rounded shadow py-1 px-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
