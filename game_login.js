function adduser(){
    player_1=document.getElementById("player1_name_input").value ;
    player_2=document.getElementById("player2_name_input").value ;

    localStorage.setItem("player1",player_1);
    localStorage.setItem("player2",player_2);
    window.location.replace("game_page.html");
    
}