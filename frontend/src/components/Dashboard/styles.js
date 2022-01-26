import styled from 'styled-components'

const MealsGrid = styled.div`
  width: auto;
  height: auto;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 33% 33% 33%;
  column-gap: 5px;
  row-gap: 10px;
  padding-left: 1rem;
`

const FiltersContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 1rem;
`

export { MealsGrid, FiltersContainer }
