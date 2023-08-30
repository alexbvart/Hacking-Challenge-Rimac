import { Divider } from '@nextui-org/react'
import AmountButtons from './AmountButtons'

const AmountSection = () => {
  return (
    <section className="w-full flex flex-col gap-4 px-4  py-4">
        <header className="flex flex-col gap-1">
            <div className="fb-base">
                Indica la suma asegurada
            </div>
            <div className="flex gap-2">
                <span className="f-sm ">MIN $12.500  </span>
                <Divider orientation="vertical" className='h-5 '/>
                <span className="f-sm "> MAX $16,500 </span>
            </div>
        </header>

        <div>
            <AmountButtons/>
        </div>
    </section>
  )
}

export default AmountSection