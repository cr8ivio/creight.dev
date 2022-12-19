import Head from 'next/head'
import { Button } from 'packages/ui'
import ApplicationShell from '../components/Layout/ApplicationShell'
import SideBarNav from '../components/Layout/SideBarNav'

export default function Home() {
  return (
    <div className="flex h-full">
      <SideBarNav />
      <ApplicationShell />
    </div>
  )
}
