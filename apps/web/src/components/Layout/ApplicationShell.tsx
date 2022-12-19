import React from 'react'
import { SecondaryColumn } from './SecondaryColumn'
import { CanvasArea } from './CanvasArea'
import { MobileTopNavigation } from './MobileTopNavigation'

export type ApplicationShellProps = {}

const ApplicationShell = ({}: ApplicationShellProps) => {
  return (
    <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
      {/*// <!-- Mobile top navigation -->*/}
      <MobileTopNavigation />

      <main className="flex flex-1 overflow-hidden">
        {/*// <!-- Primary column -->*/}
        <CanvasArea />

        {/*// <!-- Secondary column (hidden on smaller screens) -->*/}
        <SecondaryColumn />
      </main>
    </div>
  )
}

export default ApplicationShell
