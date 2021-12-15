import Button from '../Button';

const LoginForm = ({ onSubmit, onChange, formData: { email = '', password = '' } }) => {
  return (
    <div className='flex flex-col space-y-5 border border-black bg-white rounded shadow z-20 p-5'>
      <h1 className='text-2xl text-blue-600'>Welcome to LFGPF</h1>
      <form onSubmit={onSubmit} className='flex flex-col gap-y-4'>
        <label className='flex flex-col'>
          <span className='text-sm font-medium'>Email</span>
          <input
            className='border border-gray-400 p-1 rounded'
            type='email'
            name='email'
            value={email}
            onChange={onChange}
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-sm font-medium'>Password</span>
          <input
            className='border border-gray-400 p-1 rounded'
            type='password'
            name='password'
            value={password}
            onChange={onChange}
          />
        </label>
        <Button
          type='submit'
          intent='primary'
          className='h-full w-full font-semibold text-sm'
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
