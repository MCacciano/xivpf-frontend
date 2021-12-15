import Button from '../Button';

const GroupList = ({ user, groups = [], onJoinGroup }) => {
  return (
    <div className='flex flex-col space-y-6'>
      {groups.map(({ _id, name, members, owner }) => {
        return (
          <div key={_id} className='border border-gray-500 rounded p-2 shadow'>
            <div className='flex justify-between items-center '>
              <h2 className='text-lg'>{name}</h2>
              {user && owner !== user._id && (
                <Button
                  type='button'
                  intent={
                    members.some(({ _id }) => _id === user?._id) ? 'danger' : 'primary'
                  }
                  onClick={() => {
                    if (onJoinGroup) onJoinGroup(_id);
                  }}
                  className='font-semibold text-sm'
                >
                  {members.some(({ _id }) => _id === user?._id) ? '- Leave' : '+ Join'}
                </Button>
              )}
            </div>
            <div className='text-sm'>
              <h2 className='font-medium'>Members</h2>
              <div className='flex space-x-4 text-blue-600'>
                {members.length &&
                  members.map(({ _id, name }) => <div key={_id}>{name}</div>)}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GroupList;
