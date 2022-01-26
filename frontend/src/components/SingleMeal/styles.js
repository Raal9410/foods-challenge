import styled from 'styled-components'

const Meal = styled.div`
  width: auto;
  height: auto;
  max-width: 20rem;
  border: 1px solid black;
  word-wrap: break-word;
  padding: 0.5rem;
  img {
    width: 20rem;
    height: auto;
  }
`

const TagsContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  p {
    margin: 0 0.5rem 0 0;
  }
`

export { Meal, TagsContainer }
