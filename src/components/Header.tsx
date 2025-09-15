import type { FC } from 'react'
import {
  HeaderContainer,
  HeaderContent,
  LogoContainer,
  StyledLink,
  Title
} from './Header.styles'

const Header: FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <StyledLink to="/">
          <LogoContainer>
            <img 
              loading="eager" 
              src="/src/assets/flameshaper.png" 
              width="32" 
              height="32" 
              alt="logo" 
            />
          </LogoContainer>
          <Title>Pestilence</Title>
        </StyledLink>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header