import { useVehiclePlanStore } from '../../../../store/vehiclePlan'
import { useUserStore } from '../../../../store/userStore'
import {Code, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'
import CheckIcon from '../../../../components/Icons/CheckIcon'
const DataStore = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const amountPlan = useVehiclePlanStore(state=> state.amountPlan)
    const ammuntCoverage = useVehiclePlanStore(state=> state.ammuntCoverage)

    const dni = useUserStore(state=> state.dni)
    const cellPhone = useUserStore(state=> state.cellPhone)
    const licensePlate = useUserStore(state=> state.licensePlate)
    const name = useUserStore(state=> state.name)
    const mailing = useUserStore(state=> state.mailing)

    return (

        <div>
            <Button onPress={onOpen} className="max-w-fit">Ver datos del Store</Button>
            <Modal 
                isOpen={isOpen} 
                placement="bottom-center"
                onOpenChange={onOpenChange} 
            >
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">
                        Datos gestionados en Zustand
                    </ModalHeader>
                    <ModalBody>
                        <p> Los siguientes datos se encuentran en el <Code>Store</Code> :</p>
                        <ul>
                            <li>
                                {amountPlan && ( <>
                                    <CheckIcon/> Monto seleccionado: <Code>{amountPlan}</Code> 
                                </>) }
                            </li>
                            <li>
                                {ammuntCoverage && ( <>
                                    <CheckIcon/> Covertura adicional: <Code>{ammuntCoverage}</Code> 
                                </>) }
                            </li>
                            <li>
                                {name && ( <>
                                    <CheckIcon/> Nombres: <Code>{name}</Code> 
                                </>) }
                            </li>
                            <li>
                                {mailing && ( <>
                                    <CheckIcon/> Correo electrónico: <Code>{mailing}</Code> 
                                </>) }
                            </li>
                            <li>
                                {dni && ( <>
                                <CheckIcon/>Dni: <Code>{dni}</Code> 
                                </>) }
                            </li>
                            <li>
                                {cellPhone && ( <>
                                <CheckIcon/> Celular: <Code>{cellPhone}</Code>
                                </>) }
                            </li>
                            <li>
                                {licensePlate && ( <>
                                    <CheckIcon/> Placa del auto: <Code>{licensePlate}</Code> 
                                </>) }
                            </li>
                        </ul>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                        Close
                        </Button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
        </Modal>
    </div>
  )
}

export default DataStore

                 {/* <Popover showArrow placement="bottom">
                <PopoverTrigger>
                    Store
                </PopoverTrigger>
                <PopoverContent className="p-1">
                    <p>dni: {dni}</p>
                    <p>name: {name}</p>
                    <p>celular: {cellPhone}</p>
                    <p>placa: {licensePlate}</p>
                    <p>correo: {mailing}</p>
                    <p>monto_final: {amountPlan}</p>
                    <p>covertura mensual: {ammuntCoverage}</p>
                </PopoverContent>
            </Popover> */}