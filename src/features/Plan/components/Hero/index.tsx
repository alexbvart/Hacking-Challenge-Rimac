import {Card, CardBody} from "@nextui-org/react";
import UserInfo from "./UserInfo";
import { useUserStore } from "../../../../store/userStore";
import CharacterSVG from "../../../../components/Icons/Character";

const Hero = () => {
    const licensePlate = useUserStore(state => state.licensePlate)

    return (
        <div className='w-full py-4 px-4 gap-6'>
            
            <UserInfo/>

            <Card className="h-44" shadow="sm" radius="sm" >
                <CardBody >
                    <div className="flex relative ">
                        <div className="h-[136px] flex flex-col justify-center gap-2">
                            <p className="f-xs">Placa: {licensePlate.toUpperCase()} </p>
                            <p className="fb-base text-gray-600 pr-10">Wolkswagen 2019 Golf</p>
                        </div>
                        <div className=" absolute -right-4 -top-0 bottom-0 h-32 ">
                            <CharacterSVG/>
                        </div>
                    </div>
                </CardBody>
            </Card>


        </div>
    )
}

export default Hero