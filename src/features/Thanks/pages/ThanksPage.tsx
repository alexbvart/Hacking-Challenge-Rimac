import { useVehiclePlanStore } from '../../../store/vehiclePlan'
import { useUserStore } from '../../../store/userStore'

export const ThanksPage = () => {

    const amountPlan = useVehiclePlanStore(state=> state.amountPlan)
    const ammuntCoverage = useVehiclePlanStore(state=> state.ammuntCoverage)

    const dni = useUserStore(state=> state.dni)
    const cellPhone = useUserStore(state=> state.cellPhone)
    const licensePlate = useUserStore(state=> state.licensePlate)
    const mailing = useUserStore(state=> state.mailing)
    const name = useUserStore(state=> state.name)


    return (
        <>
            <div>ThanksPage</div>
            <p>dni: {dni}</p>
            <p>name: {name}</p>
            <p>celular: {cellPhone}</p>
            <p>placa: {licensePlate}</p>
            <p>correo: {mailing}</p>
            <p>monto_final: {amountPlan}</p>
            <p>covertura mensual: {ammuntCoverage}</p>
        </>
    )
}
