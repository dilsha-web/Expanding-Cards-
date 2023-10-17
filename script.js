const panels = document.querySelectorAll('.panel') // QuerySelectorAll will select all the divs with class panel

panels.forEach((panel) => {
    // console.log(panels) //will show all the panel classes in the console

    panel.addEventListener('click',() => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}