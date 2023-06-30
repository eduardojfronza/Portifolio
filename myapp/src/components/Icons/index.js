import {StyledLink} from './Icons.module'

export function Icons ({ link,icon,text }) {
    return(
        <>
            <StyledLink href={link} target='blank' >
                <span>{icon}</span>
                <p>{text}</p>
            </StyledLink>
        </>
    )
}

export default Icons