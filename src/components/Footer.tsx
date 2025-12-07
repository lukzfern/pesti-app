import type { FC } from 'react'
import { FooterContainer, FooterContent, FooterLeft, FooterRight, SourceLink } from './Footer.styles'

const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLeft>
          <SourceLink
            href="https://github.com/lukzfern/pesti-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            View source
          </SourceLink>
        </FooterLeft>
        <FooterRight>Lucas Fernández • © 2025</FooterRight>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
