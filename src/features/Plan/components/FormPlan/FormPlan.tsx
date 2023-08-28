import { THANKS_PATH } from '../../../../routes/routesPath';
import CoveragesToggles from '../CoverageToggles';
import Hero from "../Hero";
import LinkButton from '../../../../components/LinkButton';
import AmountSection from '../Amount';
import {Tabs, Tab, Progress, Button} from "@nextui-org/react"; 
import { Coverage } from '../CoverageToggles/Coverage';
const FormPlan = () => {


    return (
        <>      
            <div className=' w-full px-4 lg:w-1/2  mb-24 flex flex-col gap-6' >

                <header  className='flex-xy w-full px-4 py-4'>
                    <Button isIconOnly color="default" variant="light" radius="full" className='text-indigo-300 border-indigo-500 bg-white'>
                        {`<`}
                    </Button> 
                    <span className='fb-xs'>PASO 2 DE 2</span>
                    <Progress size="md" aria-label="Loading..." value={100} color="danger" isDisabled/>
                </header>

                <Hero/>

                <AmountSection/>

                <div className="w-full">
                    <h2 className='f-cta text-center text-xl '>Agrega o quita coberturas</h2>
                    <Tabs variant="underlined" disabledKeys={["ProtectThoseAroundYou","ImproveYourPlan"]} fullWidth  >
                        <Tab key="ProtectYourCar" title={ <div className='fb-xs text-rose-600 '>Protege a tu auto </div> }  >
                            <CoveragesToggles/>
                        </Tab>
                        <Tab key="ProtectThoseAroundYou" title="Protege a los que te rodean" className='fb-xs flex'/>
                        <Tab key="ImproveYourPlan" title="Mejora tu plan" className='fb-xs break-words'/>
                    </Tabs>
                </div>

                <footer className=' fixed bottom-0 left-0 right-0  z-10 backdrop-blur-md'>
                    <div className='flex-xy w-full px-8 py-4'>
                        <Coverage/>
                        <LinkButton href={THANKS_PATH}> LO QUIERO</LinkButton>
                    </div>
                </footer>
            </div>        
        </>
  )
}

export default FormPlan