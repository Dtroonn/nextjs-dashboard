"use client"

import { useState, useRef, useEffect } from "react"

export const UserMenu: React.FC<{user?: Record<string, any> | null}> = ({user}) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // close on outside click
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [])

  if(!user) return;

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-full px-2 py-1 hover:bg-gray-100"
      >
        <img
          src={user.image ?? "/avatar.png"}
          alt=""
          className="h-8 w-8 rounded-full"
        />
        <span className="hidden text-sm font-medium sm:block">
          {user.name}
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-56 rounded-xl border border-gray-200 bg-white shadow-lg">
          <div className="px-4 py-3">
            <p className="text-sm font-medium text-gray-900">
              {user.name}
            </p>
            <p className="truncate text-xs text-gray-500">
              {user.email}
            </p>
          </div>

          <div className="border-t border-gray-100" />

          <button
            className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-50"
            onClick={() => {
              setOpen(false)
              // router.push("/profile")
            }}
          >
            Profile
          </button>

          <button
            className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
            // onClick={() => signOut()}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  )
}
