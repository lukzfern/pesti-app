import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  padding: 1rem;
  background-color: ${props => props.theme.palette.background.paper};
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoContainer = styled.div`
  margin-right: 12px;
`

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${props => props.theme.palette.text.primary};
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`

export const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
`

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;
`

export const NavLink = styled(Link)`
  color: ${props => props.theme.palette.text.primary};
  text-decoration: none;
  padding: 0.35rem 0.5rem;
  border-radius: 6px;

  &:hover {
    background-color: ${props => props.theme.palette.action.hover};
  }
`
