import styled from 'styled-components'

export const FooterContainer = styled.footer`
  padding: 0.5rem 0;
  color: ${props => props.theme.palette.text.secondary};
  font-size: 16px;
  margin-top: auto;
`

export const FooterContent = styled.div`
  margin-inline: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    margin-inline: 1rem;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`

export const FooterLeft = styled.div`
  display: flex;
  align-items: center;
`

export const FooterRight = styled.div`
  display: flex;
  align-items: center;
`

export const SourceLink = styled.a`
  color: ${props => props.theme.palette.text.secondary};
  text-decoration: underline;
  text-underline-offset: 4px;
  transition: color 0.18s ease;

  &:hover {
    color: var(--brand-accent, ${props => props.theme.palette.primary.main});
  }
`
