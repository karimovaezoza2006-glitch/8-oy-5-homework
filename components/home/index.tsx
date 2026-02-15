"use client"
import { useSession } from "next-auth/react"

const HomeComponent = () => {
  const { data } = useSession()

  return (
    <div>
   <div>
    <img src={data?.user?.image as string} alt="" />
    <div>{data?.user?.email}</div>
   </div>
    </div>
  )
}

export default HomeComponent