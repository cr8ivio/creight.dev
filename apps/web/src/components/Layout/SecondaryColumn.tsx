import React from 'react'
import { SearchForm } from '../SearchForm'
import Tabs from '../Tabs'

import heroComponent1 from '../../assets/light/hero/10.png'
import Image from 'next/image'

const items = [
  {
    id: 1,
    src: heroComponent1,
  },
]
export function SecondaryColumn() {
  return (
    <aside className="hidden lg:order-first lg:block lg:flex-shrink-0">
      <div className="relative flex h-full w-96 flex-col overflow-y-auto border-r border-gray-200 bg-white">
        {/*// <!-- TODO: Your content (secondary column) -->*/}
        <Tabs />
        <div className="px-6 pt-6 pb-4">
          <h2 className="text-lg font-medium text-gray-900">Directory</h2>
          <p className="mt-1 text-sm text-gray-600">Search directory of 3,018 employees</p>
          <SearchForm />
        </div>

        <div className="p-6">
          <ul role="list" className="divide-y divide-gray-200">
            {items.map(item => (
              <li key={item.id} className="rounded-md border px-4 py-4 sm:px-0">
                {/* Your content */}
                <div className="aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg">
                  <Image src={item.src} alt="" className="object-cover" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}
