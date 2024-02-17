import React from 'react'
import { Link } from 'react-router-dom'

function Not_found() {
  return (
    <>
    <main className="grid  min-h-full place-items-center px-6 py-24 h-screen sm:py-32 lg:px-8">
        <div className="text-center">
            <img className='rounded-xl' src='404.png' alt='404' />
         
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"> 404 Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
         
          </div>
        </div>
      </main>
    </>
  )
}

export default Not_found