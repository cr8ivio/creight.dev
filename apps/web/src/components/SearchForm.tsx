import React from 'react'

export function SearchForm() {
  return (
    <form className="mt-6 flex space-x-4" action="Layout#">
      <div className="min-w-0 flex-1">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            {/*// <!-- Heroicon name: mini/magnifying-glass -->*/}
            <svg
              className="hidden h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input
            type="search"
            name="search"
            id="search"
            className="block w-full rounded-md border border-gray-100 pl-10 outline-none focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
            placeholder="Search"
          />
        </div>
      </div>
      <button
        type="submit"
        className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
      >
        {/*// <!-- Heroicon name: mini/funnel -->*/}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-reactroot=""
        >
          <path
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="1.5"
            stroke="#cbd5e1"
            fill="none"
            d="M2 2L10 10V20L14 22V10L22 2H2Z"
          ></path>
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </form>
  )
}
