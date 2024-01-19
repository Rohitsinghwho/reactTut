import React from 'react';
export default function Navbar({
    selectedCategory,
    ChangeCategroy
}) {
  return (
    <div>
      <div
        className="w-full
       h-10 
       bg-gray-700  
       text-white
       flex
       justify-center
       items-center
       lg:h-16
       "
      >
        <ul className="flex gap-8 justify-center items-center lg:gap-24">
          <li className={`hover:text-yellow-500 hover:cursor-pointer lg:text-lg ${selectedCategory === 'business' ? 'text-blue-500' : ''}`}
          onClick={()=>ChangeCategroy('business')}>Business</li>
          <li className={`hover:text-yellow-500 hover:cursor-pointer lg:text-lg ${selectedCategory === 'technology' ? 'text-blue-500' : ''}`}
          onClick={()=>ChangeCategroy('technology')}>Technology</li>
          <li className={`hover:text-yellow-500 hover:cursor-pointer lg:text-lg ${selectedCategory === 'science' ? 'text-blue-500' : ''}`}
          onClick={()=>ChangeCategroy('science')}>
            Science
          </li>
          <li className={`hover:text-yellow-500 hover:cursor-pointer lg:text-lg ${selectedCategory === 'sports' ? 'text-blue-500' : ''}`}
          onClick={()=>ChangeCategroy('sports')}>
            Sports
          </li>
          <li className={`hover:text-yellow-500 hover:cursor-pointer lg:text-lg ${selectedCategory === 'entertainment' ? 'text-blue-500' : ''}`}
          onClick={()=>ChangeCategroy('entertainment')}>
            Entertainment
          </li>
        </ul>
      </div>
    </div>
  );
}
