import {StyledLink} from './Icons.module'

export function Icons ({ link,icon,text }) {
    return(
        <>
            <StyledLink href={link} target='blank' >
                {icon}{text}
            </StyledLink>
        </>
    )
}

export default Icons