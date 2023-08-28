import {Card, CardBody} from "@nextui-org/react";
import UserInfo from "./UserInfo";

const Hero = () => {

    return (
        <div className='py-4 px-4 gap-6'>
            
            <UserInfo/>

            <Card className="" shadow="sm" radius="sm" >
                <CardBody>
                    <p className="f-xs">Placa:{}</p>
                    <p className="fb-base text-gray-600">Wolkswagen 2019 Golf</p>
                </CardBody>
            </Card>


        </div>
    )
}

export default Hero