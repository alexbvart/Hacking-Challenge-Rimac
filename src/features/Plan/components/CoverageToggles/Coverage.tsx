import { useVehiclePlanStore } from '../../../../store/vehiclePlan'

export const Coverage = () => {
    const ammuntCoverage = useVehiclePlanStore( state => state.ammuntCoverage )

  return (
    <div className='flex flex-col lg:gap-2'>
        <span className='fb-xs text-gray-500 hidden lg:block'> Monto</span>
        <span className='f-cta'> $ {ammuntCoverage}.00 </span> 
        <span className='fb-xs text-gray-400'> MENSUAL</span>
    </div>
  )
}
