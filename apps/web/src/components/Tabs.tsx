import React from 'react'

export type TabsProps = {}

const Tabs = ({}: TabsProps) => {
  return (
    <div className="hidden sm:block">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex" aria-label="Tabs">
          {/*// <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->*/}
          <a
            href="#"
            className="border-primary text-primary w-1/4 border-b-2 py-4 px-1 text-center text-sm font-medium "
          >
            Components
          </a>

          <a
            href="#"
            className="w-1/4 border-b-2 border-transparent py-4 px-1 text-center text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            Styles
          </a>
          <a
            href="#"
            className="w-1/4 border-b-2 border-transparent py-4 px-1 text-center text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            Content
          </a>
        </nav>
      </div>
    </div>
  )
}

export default Tabs
