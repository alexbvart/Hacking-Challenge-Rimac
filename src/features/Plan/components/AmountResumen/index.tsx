import { Divider } from '@nextui-org/react';
import LinkButton from '../../../../components/LinkButton';
import { THANKS_PATH } from '../../../../routes/routesPath';
import { Coverage } from '../CoverageToggles/Coverage';
import CheckIcon from '../../../../components/Icons/CheckIcon';

export const AmountResumen = () => {
  return (
    <div>
        <footer className=' fixed  bottom-0 left-0 right-0  z-10 backdrop-blur-md
                            lg:relative'
        >
                <div className='flex-xy w-full px-8 py-4 lg:mt-28
                                lg:flex-col'
                >
                    <Coverage/>

                    <Divider className="my-4 hidden lg:block" />
                    <div className='hidden pb-8
                                    lg:block'
                    >
                        <span className='fb-base'>El precio incluye:</span>
                        <ul>
                            <li><CheckIcon/> Llanta de respuesto</li>
                            <li><CheckIcon/> Analisis de motor</li>
                            <li><CheckIcon/> Aros gratis</li>
                        </ul>
                    </div>
                    <LinkButton href={THANKS_PATH}> LO QUIERO</LinkButton>
                </div>
            </footer>
    </div>
  )
}


// 