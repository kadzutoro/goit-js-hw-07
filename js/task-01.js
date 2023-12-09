
const categoryItems = document.querySelectorAll(".item")
    
console.log (
    `Number of categories: ${categoryItems.length}`
)

 categoryItems.forEach(categoryItem => {
        const categoryTitle = categoryItem.firstElementChild;
        const categoryList = categoryItem.lastElementChild;
        console.log (`category: ${categoryTitle.textContent}`)
        console.log (`categoryList: ${categoryList.children.length}`)
}
)