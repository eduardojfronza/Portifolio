import {Content} from './Container.module'

export function Container ({children}) {
    return(
      <>
        <Content>
            {children}
        </Content>
      </>
    )
}

export default Container