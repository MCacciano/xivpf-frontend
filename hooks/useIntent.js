const defaultIntents = {
  none: {
    bgColor: 'bg-gray-400',
    borderColor: 'border-gray-500',
    textColor: 'text-white',
  },
  primary: {
    bgColor: 'bg-blue-500',
    borderColor: 'border-blue-600',
    textColor: 'text-white',
  },
  warning: {
    bgColor: 'bg-yellow-500',
    borderColor: 'border-yellow-600',
    textColor: 'text-white',
  },
  danger: {
    bgColor: 'bg-red-500',
    borderColor: 'border-red-600',
    textColor: 'text-white',
  },
  success: {
    bgColor: 'bg-green-500',
    borderColor: 'border-green-600',
    textColor: 'text-white',
  },
};

const useIntent = (intent = 'none') => {
  return defaultIntents[intent];
};

export default useIntent;
