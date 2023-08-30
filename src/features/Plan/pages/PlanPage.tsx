import { Tab, Tabs } from "@nextui-org/react"
import Hero from "../components/Hero"
import AmountSection from "../components/Amount"
import CoveragesToggles from "../components/CoverageToggles"
import { AmountResumen } from "../components/AmountResumen"
import ProcessSteps from "../components/ProcessSteps"
import styles from './Plan.module.css'
import Feeds from "../../../components/Feeds"
const PlanPage = () => {
  return (
    <>      
        <div className={`${styles.plan_grid} w-full px-4 mb-24  gap-6`} >

            <Feeds/>
            
            <main className="flex-xy flex-col w-full">
                <ProcessSteps/>
                <Hero/>
                <AmountSection/>
                <div className="w-full max-w-full  flex flex-col   py-8 gap-4">
                    <h2 className='f-cta text-xl '>Agrega o quita coberturas</h2>
                    <div className="w-full">
                        <Tabs variant="underlined" disabledKeys={["ProtectThoseAroundYou","ImproveYourPlan"]} fullWidth >
                            <Tab key="ProtectYourCar" 
                                title={ <div className='fb-xs text-rose-600 '>Protege a <br/> tu auto </div> }  
                            >
                                <CoveragesToggles/>
                            </Tab>
                            <Tab key="ProtectThoseAroundYou" 
                                title={<span>Protege a los <br/> que te rodean</span>} 
                                className='fb-xs'/>
                            <Tab key="ImproveYourPlan" 
                                title={<span>Mejora<br/>  tu plan</span>} 
                                className='fb-xs'/>
                        </Tabs>
                    </div>
                </div>
            </main>

            <AmountResumen/>
        </div>        
    </>
  )
}

export default PlanPage