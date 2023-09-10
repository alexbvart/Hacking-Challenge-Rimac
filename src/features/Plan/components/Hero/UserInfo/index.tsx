import { Suspense } from 'react'
import UserName from './UserName'
import { Skeleton} from "@nextui-org/react";
const UserInfo = () => {
  return (
    <Suspense
        fallback={
            <>
                <div className="w-full flex flex-col gap-2 pb-6">
                    <Skeleton className="h-8 text-4xl md:text-5xl lg:text-6xl rounded-lg"/>
                    <Skeleton className="h-6  w-4/5 rounded-lg"/>
                </div>
            </>
        }
    >
        <UserName/>
    </Suspense>
  )
}

export default UserInfo