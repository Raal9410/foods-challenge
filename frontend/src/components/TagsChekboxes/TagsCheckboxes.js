import React from 'react'

const TagsCheckBoxes = ({ tags }) => {

  return (
    <div>
      {tags.map(tag => (
        <div key={tag}>
          <label>{tag}</label>
          <input type="checkbox" value={tag} />
        </div>
      ))}
    </div>
  )
}

export default TagsCheckBoxes
