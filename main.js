function adduser(){
    player1_name=document.getElementById("p1_name_input").value;
    player2_name=document.getElementById("p2_name_input").value;
    localStorage.setItem("player1 name", player1_name);
    localStorage.setItem("player2 name", player2_name);
    window.location="game_page.html";
}