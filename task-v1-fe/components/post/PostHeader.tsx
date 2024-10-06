import React from 'react';
import Portrait from '../../assets/mcb.jpg';
import User1 from '../../assets/User1.jpeg';

const PostHeader = () => {
  return (
    <header>
      <img className="object-cover h-64 w-full" src={Portrait.src} alt="Post Portrait Image" />
      <div className="bg-indigo-400 py-1"></div>
      <div className="bg-indigo-600 text-white py-6 px-24 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div className="min-w-full">
          <h1 className="text-4xl font-bold">Cell Biology, Genetics and Evolution</h1>
          <div className="text-sm mt-2 flex justify-between items-start sm:items-center">
            <div className="text-base flex items-center">
              <img className="object-cover rounded-full w-8 h-8" src={User1.src} alt="User picture" />
              <span className="m-2">1 Contributor</span> • <span className="m-2">143 Flashcards</span> • <span className="m-2">48 Subscribers</span>
            </div>
            <div>
              <button className="mr-4 mt-4 sm:mt-0 bg-white text-gray-600 font-semibold py-2 px-4 rounded">
                •••
              </button>
              <button className="mt-4 sm:mt-0 bg-white text-gray-600 font-semibold py-2 px-4 rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PostHeader;
