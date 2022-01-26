import React from 'react'

const TagsCheckBoxes = ({ tags, handleSelectedTags }) => {
  return (
    <div>
      {tags.map(tag => (
        <div key={tag}>
          <label>{tag}</label>
          <input type="checkbox" value={tag} onChange={e => handleSelectedTags(e)} />
        </div>
      ))}
    </div>
  )
}

export default TagsCheckBoxes
