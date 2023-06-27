import HeaderLink from '../HeaderLink/'
import { ContainerHeader, LinksMenu,Title } from './Header.module'

export function Header() {
    return (
        <ContainerHeader>
            <LinksMenu>
                <nav>
                    <HeaderLink url="./">
                        Home
                    </HeaderLink>

                    <HeaderLink url="/Sobre">
                        Sobre
                    </HeaderLink>

                    <HeaderLink url="/">
                        Habilidades
                    </HeaderLink>

                    <HeaderLink url="/">
                        Projetos
                    </HeaderLink>
                </nav>
            </LinksMenu>
            
            <Title>
                <h1>Meu Portifólio</h1>
                <p>Desenvolvido por <a href=''>Eduardo Fronza</a></p>
            </Title>
        </ContainerHeader>
    )
}

export default Header