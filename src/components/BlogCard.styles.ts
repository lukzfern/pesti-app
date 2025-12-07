import styled from 'styled-components'
import { Paper, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const Card = styled(Paper)<{ $bannerImage?: string }>`
  padding: 2.5rem 1rem;
  margin: 0;
  transition: background-color 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
  border: none;
  border-top: 1px solid #364153;
  border-bottom: 1px solid #364153;

  &:first-child {
    border: none;
    border-top: 1px solid #364153;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: ${props => (props.$bannerImage ? `url('${props.$bannerImage}')` : 'none')};
    background-size: cover;
    background-position: center;
    filter: grayscale(25%);
    opacity: 0.15;
    transition: opacity 0.25s ease-in-out;
    pointer-events: none;
    z-index: 0;
  }

  &:hover::before {
    opacity: 0.25;
  }
`

export const Article = styled.article<{ $isCompact?: boolean }>`
  position: relative;
  z-index: 1;
  margin-inline: ${props => (props.$isCompact ? '0' : '300px')};
`

export const CardContent = styled.div`
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const CardTitle = styled(Typography)`
  margin-bottom: 0.5rem;
  /* use brand title token with fallback to theme primary */
  color: var(--brand-title, ${props => props.theme.palette.primary.main});
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: inline-block;

  &:hover {
    text-decoration: none;
  }
`

export const MetaInfo = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  color: ${props => props.theme.palette.text.secondary};
  margin-bottom: 0.5rem;
`

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.palette.text.secondary};
`

export const IconSVG = styled.svg`
  width: 16px;
  height: 16px;
  flex: 0 0 16px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.5px;
  stroke-linecap: round;
  stroke-linejoin: round;
  opacity: 0.85;
`

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`

export const Description = styled(Typography)`
  margin-bottom: 1rem;
  line-height: 1.5;
`

export const ReadMoreLink = styled(Link)`
  color: var(--brand-accent, ${props => props.theme.palette.primary.main});
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 600;
  transition:
    color 0.18s ease,
    transform 120ms ease;

  &:hover {
    color: color-mix(
      in srgb,
      var(--brand-accent, ${props => props.theme.palette.primary.main}) 85%,
      white 15%
    );
    text-decoration: none;
    transform: translateY(-1px);
  }
`

export const TagLink = styled(Link)`
  text-decoration: none;
  display: inline-flex;

  &:hover {
    opacity: 0.9;
  }
  .MuiChip-root {
    background: color-mix(in srgb, var(--brand-tag-fg) 8%, transparent 92%);
    color: var(--brand-tag-fg);
    font-weight: 600;
    border-radius: 999px;
    border: 1px solid color-mix(in srgb, var(--brand-tag-fg) 28%, transparent 72%);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    padding: 0 0.5rem;
    height: 28px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`
