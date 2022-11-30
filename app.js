const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

///////////////////////////////////////////
// PARA DESPLEGAR EL MENÛ DE LA IZQUIERDA
//////////////////////////////////////////

// toggleBtn.addEventListener("click", function() {

//     if (sidebar.classList.contains("show-sidebar")) {
//         sidebar.classList.remove("show-sidebar");
//     } else {
//         sidebar.classList.add("show-sidebar");
//     }

// });

// forma más rápida y en una sola línea

toggleBtn.addEventListener("click", function() {

    sidebar.classList.toggle("show-sidebar");

});


/////////////////////////////////////////
//   PARA CERRAR EL MENU DE LA IZQUIERDA USANDO LA TACHA
/////////////////////////////////////////


closeBtn.addEventListener("click", function() {

    sidebar.classList.remove("show-sidebar");

})

