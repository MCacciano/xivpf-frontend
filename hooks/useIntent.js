const useIntent = (intent = 'none') => {
  const defaultIntents = {
    none: {
      bgColor: 'bg-white',
      hoverBgColor: 'hover:bg-gray-500',
      textColor: 'text-gray-500',
      borderColor: 'border-gray-500',
      hoverTextColor: 'hover:text-white',
    },
    primary: {
      bgColor: 'bg-white',
      hoverBgColor: 'hover:bg-blue-600',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-600',
      hoverTextColor: 'hover:text-white',
    },
    warning: {
      bgColor: 'bg-white',
      hoverBgColor: 'hover:bg-yellow-600',
      textColor: 'text-yellow-600',
      borderColor: 'border-yellow-600',
      hoverTextColor: 'hover:text-white',
    },
    danger: {
      bgColor: 'bg-white',
      hoverBgColor: 'hover:bg-red-600',
      textColor: 'text-red-600',
      borderColor: 'border-red-600',
      hoverTextColor: 'hover:text-white',
    },
    success: {
      bgColor: 'bg-white',
      hoverBgColor: 'hover:bg-green-600',
      textColor: 'text-green-600',
      borderColor: 'border-green-600',
      hoverTextColor: 'hover:text-white',
    },
  };

  return defaultIntents[intent];
};

export default useIntent;
