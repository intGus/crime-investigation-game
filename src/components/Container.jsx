import styled from 'styled-components'

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 3}, 1fr);
  grid-auto-rows: 12.5rem;
  gap: 1rem;
  width: 100%;
  max-width: 37.5rem;
  padding: 0.5rem;
  margin: 0 auto;
  box-sizing: border-box;
`
export default function Container ({ children, passedColumns }) {
  return (
    <StyledGrid columns={passedColumns}>
      {children}
    </StyledGrid>
  )
}