import { styled, Typography } from '@mui/material'
import Image from 'next/image'

export const TeamMemberWrapper = styled('div')`
  display: flex;
  flex-direction: column;
`

export const TeamPhoto = styled(Image)`
  border-radius: 50%;
`

export const ImgZone = styled('div')`
  // width: 500px;
  // height: 200px;
  // background-color: blue;
  display: flex;
  justify-content: center;
  overflow: hidden;
`

export const LineMember = styled('div')`
  width: 80px;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.75);
  &::before {
    display: inline-block;
    align-items: center;
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: #fff;
    position: absolute;
    top: 48.5%;
    right: 50%;
    transform: translate(50%);
  }
  ${({ theme }) => theme.breakpoints.down('md')} {
    display: none;
  }
`

export const TextZone = styled('div')`
  ${({ theme }) => theme.breakpoints.down('md')} {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`

export const TextAll = styled(Typography)`
  max-width: 15rem;
`
