function alterarStatus(id){
    let gameClick = document.getElementById(`game-${id}`);
    let rentImg = gameClick.querySelector(".dashboard__item__img");
    let button = gameClick.querySelector(".dashboard__item__button");
    
    if(rentImg.classList.contains("dashboard__item__img--rented")){
        rentImg.classList.remove("dashboard__item__img--rented");
        button.classList.remove("dashboard__item__button--return");
        button.textContent = "Alugar";
    } else{
        rentImg.classList.add("dashboard__item__img--rented");
        button.textContent = "Devolver";
        button.classList.add("dashboard__item__button--return");
    }
}