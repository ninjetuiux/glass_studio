import React from 'react'
import Ava2 from '../../public/assets/avatar/ava2.jpg'

export default function Testimonials() {
  return (
    <div className="grid place-items-center w-screen h-auto sm:h-screen sm:overflow-hidden gap-3 sm:mr-[18%] xl:ml-[0] sm:pl-[18%] pt-28 sm:pt-0">
      <h1 className="absolute xl:top-36 lg:top-16 sm:top-7 top-16 lg:text-6xl sm:text-3xl text-2xl font-verla">מה הלקוחות חושבים עלינו</h1>
      <div className="grid grid-rows-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 items-center px-3 xl:px-0 xl:pl-3">
        <div className="col-span-1">
          <div className='font-verla bg-primary text-secondary rounded-xl flex justify-center p-5'>
            <div className="flex flex-col items-center">
              <div 
                className='rounded-full bg-center bg-cover bg-secondary p-12 h-16 w-16' 
                style={{ 
                  backgroundImage: `url(${Ava2})`
                }}
              >
              </div>
              <h1 className='text-xl'>@פלוני אלמוני</h1>
              <p>חלךדכגגכדגכ כחלךדגכדגכחלך חלךכדגחלכדגחלךכ דגככחלךדג דךגכחלכחלךד דגכלךכחדגךכחדגלךכחךדגחךכחדגךכחלכ ח חדגךחעדגכךעח דג גלךעדגך ךדגעךעחך</p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className='font-verla bg-primary text-secondary rounded-xl flex justify-center p-5'>
            <div className="flex flex-col items-center">
              <div 
                className='rounded-full bg-center bg-cover bg-secondary p-12 h-16 w-16' 
                style={{ 
                  backgroundImage: `url(${Ava2})`
                }}
              >
              </div>
              <h1 className='text-xl'>@פלוני אלמוני</h1>
              <p className=''>חלךדכגגכדגכ כחלךדגכדגכחלך חלךכדגחלכדגחלךכ דגככחלךדג דךגכחלכחלךד דגכלךכחדגךכחדגלךכחךדגחךכחדגךכחלכ ח חדגךחעדגכךעח דג גלךעדגך ךדגעךעחך</p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className='font-verla bg-primary text-secondary rounded-xl flex justify-center p-5'>
            <div className="flex flex-col items-center">
              <div 
                className='rounded-full bg-center bg-cover bg-secondary p-12 h-16 w-16 ' 
                style={{ 
                  backgroundImage: `url(${Ava2})`
                }}
              >
              </div>
              <h1 className='text-xl'>@פלוני אלמוני</h1>
              <p>חלךדכגגכדגכ כחלךדגכדגכחלך חלךכדגחלכדגחלךכ דגככחלךדג דךגכחלכחלךד דגכלךכחדגךכחדגלךכחךדגחךכחדגךכחלכ ח חדגךחעדגכךעח דג גלךעדגך ךדגעךעחך</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
