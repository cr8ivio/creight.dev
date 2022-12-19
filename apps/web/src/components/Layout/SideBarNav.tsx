import React from 'react'

export type SideBarNavProps = {}

const SideBarNav = ({}: SideBarNavProps) => {
  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex w-20 flex-col">
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto border-r bg-white">
          <div className="flex-1">
            <div className="flex items-center justify-center py-4">
              <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.2407 1.87757C19.3918 0.707478 21.9893 0.707477 24.1404 1.87757L36.6111 8.66098C38.9347 9.92488 40.3811 12.3582 40.3811 15.0033V27.8413C40.3811 30.4864 38.9347 32.9197 36.6111 34.1836L24.1404 40.967C21.9893 42.1371 19.3918 42.1371 17.2407 40.967L4.76999 34.1836C2.44642 32.9197 1 30.4864 1 27.8413L1 15.0033C1 12.3582 2.44641 9.92488 4.76998 8.66098L17.2407 1.87757Z"
                  fill="#2E2C34"
                />
                <circle cx="20.752" cy="21" r="6" fill="#FBFAFC" />
                <circle cx="36.5" cy="35.5" r="8.5" fill="#FC3400" stroke="white" strokeWidth="2" />
                <path
                  d="M33.5785 39.994L33.5845 38.878L37.3465 35.506C37.6505 35.238 37.8565 34.982 37.9645 34.738C38.0765 34.494 38.1325 34.25 38.1325 34.006C38.1325 33.698 38.0645 33.422 37.9285 33.178C37.7925 32.93 37.6045 32.734 37.3645 32.59C37.1245 32.446 36.8485 32.374 36.5365 32.374C36.2165 32.374 35.9305 32.45 35.6785 32.602C35.4305 32.75 35.2365 32.948 35.0965 33.196C34.9565 33.444 34.8885 33.712 34.8925 34H33.6085C33.6085 33.44 33.7345 32.95 33.9865 32.53C34.2425 32.106 34.5925 31.776 35.0365 31.54C35.4805 31.3 35.9885 31.18 36.5605 31.18C37.1045 31.18 37.5925 31.304 38.0245 31.552C38.4565 31.796 38.7965 32.132 39.0445 32.56C39.2965 32.988 39.4225 33.476 39.4225 34.024C39.4225 34.42 39.3705 34.756 39.2665 35.032C39.1625 35.308 39.0065 35.564 38.7985 35.8C38.5905 36.036 38.3305 36.292 38.0185 36.568L35.1145 39.16L34.9765 38.8H39.4225V39.994H33.5785Z"
                  fill="white"
                />
                <circle cx="5" cy="5" r="4" fill="#14B13B" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <nav aria-label="Sidebar" className="flex flex-col items-center space-y-3 py-6">
              <a href="#" className="text-primary flex items-center rounded p-4 hover:bg-blue-50">
                {/*// <!-- Shape name: mission-control -->*/}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-reactroot=""
                >
                  <rect
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    stroke="#cbd5e1"
                    fill="none"
                    transform="rotate(-90 2 14)"
                    rx="1"
                    height="11"
                    width="8"
                    y="14"
                    x="2"
                  ></rect>
                  <rect
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    stroke="#cbd5e1"
                    fill="none"
                    transform="rotate(-90 16 14)"
                    rx="1"
                    height="6"
                    width="12"
                    y="14"
                    x="16"
                  ></rect>
                  <rect
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    stroke="#cbd5e1"
                    fill="none"
                    transform="rotate(-90 8 22)"
                    rx="1"
                    height="13"
                    width="5"
                    y="22"
                    x="8"
                  ></rect>
                </svg>
                <span className="sr-only">Home</span>
              </a>

              <a href="#" className="flex items-center rounded bg-blue-50 p-4 text-indigo-200 hover:bg-blue-50">
                {/*// <!-- Shape name: wireframe -->*/}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-reactroot=""
                >
                  <path
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    stroke="#0a5dff"
                    fill="none"
                    d="M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V13H2V4Z"
                  ></path>
                  <path
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    stroke="#0a5dff"
                    fill="none"
                    d="M2 13H22V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V13Z"
                  ></path>
                  <path stroke-linecap="round" stroke-width="1.5" stroke="#0a5dff" d="M5 16H19"></path>
                  <path
                    stroke-linecap="round"
                    stroke-width="1.5"
                    stroke="#0a5dff"
                    d="M2.7695 2.42334L12 7.50013M12 7.50013L22 13.0001M12 7.50013L21.2305 2.42334M12 7.50013L2 13.0001"
                  ></path>
                  <path stroke-linecap="round" stroke-width="1.5" stroke="#0a5dff" d="M5 19H15"></path>
                </svg>
                <span className="sr-only">Trending</span>
              </a>

              <a href="#" className="flex items-center rounded p-4 text-indigo-200 hover:bg-blue-50">
                {/*// <!-- Shape name: database -->*/}
                <svg
                  width="32"
                  height="32"
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
                    d="M2 19C2 20.66 6.48 22 12 22C17.52 22 22 20.66 22 19V14C22 15.66 17.52 17 12 17C6.48 17 2 15.66 2 14V19Z"
                  ></path>
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    stroke="#cbd5e1"
                    fill="none"
                    d="M22 14C22 15.66 17.52 17 12 17C6.48 17 2 15.66 2 14V9C2 10.66 6.48 12 12 12C17.52 12 22 10.66 22 9V14Z"
                  ></path>
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    stroke="#cbd5e1"
                    fill="none"
                    d="M2 9C2 10.66 6.48 12 12 12C17.52 12 22 10.66 22 9V4.5C22 5.88 17.52 7 12 7C6.48 7 2 5.88 2 4.5V9Z"
                  ></path>
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    stroke="#cbd5e1"
                    fill="none"
                    d="M12 7C17.5228 7 22 5.88071 22 4.5C22 3.11929 17.5228 2 12 2C6.47715 2 2 3.11929 2 4.5C2 5.88071 6.47715 7 12 7Z"
                  ></path>
                </svg>
                <span className="sr-only">Bookmarks</span>
              </a>

              <a href="#" className="flex items-center rounded p-4 text-indigo-200 hover:bg-blue-50">
                {/*// <!-- Shape name: cpu -->*/}
                <svg
                  width="32"
                  height="32"
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
                    d="M9 2V5"
                  ></path>
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    stroke="#cbd5e1"
                    d="M15 2V5"
                  ></path>
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    stroke="#cbd5e1"
                    d="M9 19V22"
                  ></path>
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    stroke="#cbd5e1"
                    d="M15 19V22"
                  ></path>
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    stroke="#cbd5e1"
                    d="M22 9H19"
                  ></path>
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    stroke="#cbd5e1"
                    d="M22 15H19"
                  ></path>
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    stroke="#cbd5e1"
                    d="M5 9H2"
                  ></path>
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    stroke="#cbd5e1"
                    d="M5 15H2"
                  ></path>
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    stroke="#cbd5e1"
                    fill="none"
                    d="M17 19H7C5.9 19 5 18.1 5 17V7C5 5.9 5.9 5 7 5H17C18.1 5 19 5.9 19 7V17C19 18.1 18.1 19 17 19Z"
                  ></path>
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    stroke="#cbd5e1"
                    fill="none"
                    d="M14.5 9.5H9.5V14.5H14.5V9.5Z"
                  ></path>
                </svg>
                <span className="sr-only">Messages</span>
              </a>

              <a href="#" className="flex items-center rounded p-4 text-indigo-200 hover:bg-blue-50">
                {/*// <!-- Shape name: color palette -->*/}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-reactroot=""
                >
                  <path
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    stroke="#cbd5e1"
                    fill="none"
                    d="M9.62898 19.6847L15.3137 14H20C21.1046 14 22 14.8954 22 16V20C22 21.1046 21.1046 22 20 22H6C7.60728 22 8.99314 21.052 9.62898 19.6847Z"
                  ></path>
                  <path
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    stroke="#cbd5e1"
                    fill="none"
                    d="M9.62891 19.6848L20.2426 9.07107C21.0237 8.29002 21.0237 7.02369 20.2426 6.24264L17.4142 3.41421C16.6331 2.63316 15.3668 2.63317 14.5857 3.41421L9.99996 8V18C9.99996 18.6019 9.86702 19.1727 9.62891 19.6848Z"
                  ></path>
                  <path
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    stroke="#cbd5e1"
                    fill="none"
                    d="M2 4C2 2.89543 2.89543 2 4 2H8C9.10457 2 10 2.89543 10 4V18C10 20.2091 8.20914 22 6 22V22C3.79086 22 2 20.2091 2 18V4Z"
                  ></path>
                </svg>
                <span className="sr-only">Profile</span>
              </a>
            </nav>
          </div>
          <div className="flex flex-shrink-0 pb-5">
            <a href="#" className="w-full flex-shrink-0">
              <img
                className="mx-auto block h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="sr-only">
                <p>Emily Selman</p>
                <p>Account settings</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBarNav
