import React from 'react'
import Image from 'next/image'
import { CircleDollarSign,LayoutDashboard,Building2,Rocket,CircleUser } from 'lucide-react';


const Side = () => {
  return (
    <div>
      <div className="flex">
  <div className="flex h-screen w-16 flex-col justify-between border-e bg-white">
    <div>
      <div className="inline-flex size-16 items-center justify-center">
       
      </div>

      <div className="border-t border-gray-100">
        <div className="px-2">
          <div className="py-4">
            <a
              href="#"
              className="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700"
            >
              <LayoutDashboard size={20} color="#8f8f8f" strokeWidth={1.75} />

              <span
                className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
              >
                Dashboard
              </span>
            </a>
          </div>

          <ul className="space-y-1 border-t border-gray-100 pt-4">
            <li>
              <a
                href="#"
                className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              >
                <CircleDollarSign size={20} color="#8f8f8f" strokeWidth={1.75} />
                

                <span
                  className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                >
                  Investments
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              >
                <Building2 size={20} color="#8f8f8f" strokeWidth={1.75} />

                <span
                  className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                >
                  Companies
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              >
                <Rocket size={20} color="#8f8f8f" strokeWidth={1.75} />

                <span
                  className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                >
                  Start-Ups
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              >
                <CircleUser size={20} color="#8f8f8f" strokeWidth={1.75} />

                <span
                  className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                >
                  Profile
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
      <form action="#">
        <button
          type="submit"
          className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 opacity-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>

          <span
            className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
          >
            Logout
          </span>
        </button>
      </form>
    </div>
  </div>

  <div className="flex h-screen flex-1 flex-col justify-between border-e bg-white">
    <div className="px-4 py-6">
    <Image src="/logo.svg" alt="logo" width={200} height={200} />
      <ul className="mt-6 space-y-1">
        <li>
          <a
            href="#"
            className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
          >
           Dashboard
          </a>
        </li>

        <li>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="text-sm font-medium">Investments </span>

              
            </summary>

            
          </details>
        </li>

        <li>
          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Companies
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Start Up&apos;s
          </a>
        </li>

        <li>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="text-sm font-medium"> Profile </span>

              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                
              </span>
            </summary>

            
          </details>
        </li>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default Side