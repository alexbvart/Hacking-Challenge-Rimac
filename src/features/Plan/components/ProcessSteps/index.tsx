import { Button, Progress } from "@nextui-org/react"
import Feeds from "../../../../components/Feeds"

const ProcessSteps = () => {
  return (
        <header  className='flex-xy w-full px-4 py-4 gap-4 lg:hidden'>
            <Button 
              isIconOnly color="default" variant="light" radius="full" 
              className='text-indigo-300 border-slate-300 bg-white border '
            >
                {`<`}
            </Button> 
            <span className='fb-xs'>PASO 2 DE 2</span>
            <Progress size="md" aria-label="Loading..." value={100} color="danger" isDisabled/>
        </header>
  )
}

export default ProcessSteps