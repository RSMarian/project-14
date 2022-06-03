// INSTRUCTIONS FOR SIDEBAR FUNCTIONALITY
//set-up css to hide sidebar by default
//toggle class that has transform: translate(0)

const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function (){
    console.log(sidebar.classList);
    // if(sidebar.classList.contains('show-sidebar')){
    //     sidebar.classList.remove('show-sidebar')
    // }
    // else{
    //     sidebar.classList.add('show-sidebar');
    // }
    sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar')
});