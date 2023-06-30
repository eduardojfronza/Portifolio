import Icons from '../Icons'
import {ContainerFooter, SocialMedia, Contact } from './Footer.module'
import { BsInstagram, BsLinkedin, BsGithub, BsFillTelephoneFill } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

export function Footer() {
    return (
        <>
            <ContainerFooter>
                <SocialMedia>
                    <Icons
                        link='https://www.instagram.com/eduardo_fronza/'
                        icon={<BsInstagram />}
                        text='Instagram'
                    />
                    <Icons
                        link='https://www.linkedin.com/in/eduardo-fronza-49a435233/'
                        icon={<BsLinkedin />}
                        text='Linkedin'
                    />
                    <Icons
                        link='https://github.com/eduardojfronza'
                        icon={<BsGithub />}
                        text='Github'
                    />
                </SocialMedia>
                <Contact>
                    <Icons
                        link='https://www.google.com/maps/place/Cristo+Rei,+S%C3%A3o+Leopoldo+-+RS/@-29.7981348,-51.150273,17z/data=!3m1!4b1!4m6!3m5!1s0x951968dd51eca1fd:0xa47f97505e1ddb2c!8m2!3d-29.7981395!4d-51.1476981!16s%2Fg%2F11c66dq6qp?entry=ttu'
                        icon={<FaLocationDot />}
                        text='Cristo Rei - São Leopoldo'
                    />
                    <Icons
                        link=''
                        icon={<MdEmail />}
                        text='edujfronza@gmail.com'
                    />
                    <Icons
                        link=''
                        icon={<BsFillTelephoneFill />}
                        text='+55 51 99589-0038'
                    />
                </Contact>
            </ContainerFooter>
        </>
    )
}

export default Footer