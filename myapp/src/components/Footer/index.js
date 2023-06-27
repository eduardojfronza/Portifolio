import Icons from '../Icons'
import {ContainerFooter} from './Footer.module'
import {BsInstagram, BsLinkedin, BsGithub} from 'react-icons/bs'

export function Footer () {
    return(
        <>
            <ContainerFooter>
                <Icons 
                    link='https://github.com'
                    icon={<BsInstagram />}
                    text='Instagram'
                />
                
            </ContainerFooter>
        </>
    )
}

export default Footer