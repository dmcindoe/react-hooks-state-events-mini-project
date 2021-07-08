import React from "react"

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  const categoryTabs = categories.map((category) => {
    return (
      <button 
        key={category}
        className = {selectedCategory === category  && "selected"}
        onClick={() => onSelectCategory(category)}
      >
        {category}
      </button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryTabs}
    </div>
  )
}

export default CategoryFilter
