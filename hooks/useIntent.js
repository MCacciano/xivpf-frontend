const useIntent = (intent = 'none') => {
  const list = {
    none: {
      bgColor: 'bg-gray-500',
      hoverBgColor: 'hover:bg-white',
      textColor: 'text-white',
      borderColor: 'border-black',
      hoverTextColor: 'hover:text-gray-500',
    },
    primary: {
      bgColor: 'bg-blue-600',
      hoverBgColor: 'hover:bg-white',
      textColor: 'text-white',
      borderColor: 'border-black',
      hoverTextColor: 'hover:text-blue-600',
    },
    warning: {
      bgColor: 'bg-yellow-600',
      hoverBgColor: 'hover:bg-white',
      textColor: 'text-white',
      borderColor: 'border-black',
      hoverTextColor: 'hover:text-yellow-600',
    },
    danger: {
      bgColor: 'bg-red-600',
      hoverBgColor: 'hover:bg-white',
      textColor: 'text-white',
      borderColor: 'border-black',
      hoverTextColor: 'hover:text-red-600',
    },
    success: {
      bgColor: 'bg-green-600',
      hoverBgColor: 'hover:bg-white',
      textColor: 'text-white',
      borderColor: 'border-black',
      hoverTextColor: 'hover:text-green-600',
    },
    'none-outline': {
      bgColor: 'bg-white',
      hoverBgColor: 'hover:bg-gray-500',
      textColor: 'text-gray-500',
      borderColor: 'border-gray-500',
      hoverTextColor: 'hover:text-white',
    },
    'primary-outline': {
      bgColor: 'bg-white',
      hoverBgColor: 'hover:bg-blue-600',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-600',
      hoverTextColor: 'hover:text-white',
    },
    'warning-outline': {
      bgColor: 'bg-white',
      hoverBgColor: 'hover:bg-yellow-600',
      textColor: 'text-yellow-600',
      borderColor: 'border-yellow-600',
      hoverTextColor: 'hover:text-white',
    },
    'danger-outline': {
      bgColor: 'bg-white',
      hoverBgColor: 'hover:bg-red-600',
      textColor: 'text-red-600',
      borderColor: 'border-red-600',
      hoverTextColor: 'hover:text-white',
    },
    'success-outline': {
      bgColor: 'bg-white',
      hoverBgColor: 'hover:bg-green-600',
      textColor: 'text-green-600',
      borderColor: 'border-green-600',
      hoverTextColor: 'hover:text-white',
    },
  };

  return list[intent];
};

export default useIntent;
