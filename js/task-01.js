const listEl = document.querySelector('#categories').children;
console.log('Number of categories:', listEl.length);

[...listEl].forEach(element => {
    const titleOfCategory = element.querySelector('h2').textContent;
    const categoryElement = element.querySelectorAll('li');
        
    console.log('Category:', titleOfCategory);
    console.log('Elements:', categoryElement.length);
});


// done