import React from 'react'


interface ProblemItem {
  id :string,
  title : string,
}

const Problem = ({id ,title} : ProblemItem) => {
  return (
    <div>
      {id }{title}
    </div>
  )
}

export default Problem