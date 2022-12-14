import styled from '@emotion/styled'

const Paragraph = styled.p`
  font-size: 1.2rem;
  /* text-align: justify; */
  /* text-justify: inter-word; */
  line-height: 1.4;
  text-indent: 1em;

  @media screen {
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
`

export default Paragraph
