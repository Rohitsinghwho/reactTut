import React from 'react';
export default function Card({
ImageUrl,
  title = 'This is Title',
  description = 'This is description',
  ArticleUrl
})

{
    const url = `https://images.pexels.com/photos/19806224/pexels-photo-19806224/free-photo-of-a-black-and-white-photo-of-a-bird-flying.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
    let customtitle="Title is Not Present for this News"
    let customDesc="Description is Not Present for this News"

    const HandleButtonClick=()=>{
        if(ArticleUrl) {
            window.open(ArticleUrl, '_blank');
        }
    }
  return (
    <div className="w-[150px] rounded-md border  mt-5 lg:w-[300px]">
      <img src={ImageUrl?ImageUrl:url} className="h-[70px] w-full rounded-md object-cover lg:h-[150px]" />
      <div className="p-4">
        <h1 className="text-sm font-semibold lg:text-lg">{title?title:customtitle}...</h1>
        <p className="mt-1 text-[.6rem] text-gray-600 h-10 lg:text-sm">{description!==null?description:customDesc}...</p>
        <button
          type="button"
          onClick={HandleButtonClick}
          className=" lg:text-[15px] mt-5 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button>
      </div>
    </div>
  );
}
