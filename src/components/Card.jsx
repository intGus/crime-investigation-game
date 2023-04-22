import styled from 'styled-components'

const StyledCard = styled.div`
  border-radius: 15px;
  background-color: #faf7fa;
  background-image: linear-gradient(#fdeae3, #b8816d), linear-gradient(#b37b04,#f8c966), linear-gradient(#f1d6c3,#f1d6c3), linear-gradient(90deg, transparent 20px, #f9e5c7 0, #f9e5c7 calc(100% - 20px), transparent 0);
  background-size: 100% 50px, 50px 10px, 60px 10px, auto 50px;
  background-position: 0 0, 20px 80px, 20px 100px, left 0 bottom 20px;
  background-repeat: no-repeat;
`

export default function Card({ children }) {


  return (
    <StyledCard>
      {children}
    </StyledCard>
  )
}
