import React, { useState } from 'react';

interface ReactionsProps {
  setIsReplying: React.Dispatch<React.SetStateAction<boolean>>;
  isReplying: boolean;
  getReplies?: () => Promise<void>;
  commentsCount: number;
}

const Reactions = ({ isReplying, setIsReplying, getReplies, commentsCount }: ReactionsProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="flex items-center mt-2 space-x-2 text-sm text-gray-500">
      <button data-testid="like-btn" onClick={() => setIsLiked(!isLiked)}>
        <div className="flex">
          {isLiked ? 
            <svg className="w-5 h-5 text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z"/>
            </svg>
            : 
            <svg className="w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
            </svg>
          }
        </div>
      </button>
      <button onClick={() => setIsReplying(!isReplying)}>
        <div className="flex">
          {isReplying ? 
            <>
              <svg className="w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 14-4-4-4 4"/>
              </svg>
              Hide
            </> : 
            <>
              <svg className="w-5 h-5 text-gray-500 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9h5m3 0h2M7 12h2m3 0h5M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.616a1 1 0 0 0-.67.257l-2.88 2.592A.5.5 0 0 1 8 18.477V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/>
              </svg>
              Comment
            </>
          }
        </div>
      </button>
      {commentsCount ? <button onClick={getReplies}> | {commentsCount} comment{commentsCount > 1 ? 's' : null}</button> : null}
    </div>
  );
}

export default Reactions;