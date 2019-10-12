$( document ).ready(function(){
    var Random = Math.floor(Math.random() * 90 + 11);
    $('#randomNumber').text(Random);
    var num1 = Math.floor(Math.random() * 9 + 1) // bruins
    var num2 = Math.floor(Math.random() * 9 + 1) // celtics
    var num3 = Math.floor(Math.random() * 9 + 1) // patriots
    var num4 = Math.floor(Math.random() * 9 + 1) // red sox
    var player = 0; //total when guessing
    var win = 0;
    var lose = 0;
  
  $('#wins').text(win);
  $('#losses').text(lose);
  //--------------------------------------------------------------
  function reset(){
        Random = Math.floor(Math.random() * 90 + 11);
    
        $('#randomNumber').text(Random);
        num1 = Math.floor(Math.random() * 9 + 1);
        num2 = Math.floor(Math.random() * 9 + 1);
        num3 = Math.floor(Math.random() * 9 + 1);
        num4 = Math.floor(Math.random() * 9 + 1);
        player = 0;
        $('#total').text(player);
        } 
  //--------------------------------------------------------------
  //losing
  function loss(){
  alert ("You lose!");
    lose++;
    $('#losses').text(lose);
    reset();
  }

  //--------------------------------------------------------------
//winning
  function won(){
  alert("You won!");
    wins++; 
    $('#wins').text(win);
    reset();
  }
  //--------------------------------------------------------------
//bruins
    $('#one').on ('click', function(){
      player = player + num1;
   
      $('#total').text(player); 
          if (player == Random){
            won();
          }
          else if ( player > Random){
            loss();
          }   
    })  
  //--------------------------------------------------------------
//celtics
    $('#two').on ('click', function(){
      player = player + num2;
     
      $('#total').text(player); 
          if (player == Random){
            won();
          }
          else if ( player > Random){
            loss();
          } 
    })  
  //--------------------------------------------------------------
//patriots
    $('#three').on ('click', function(){
      player = player + num3;
   
      $('#total').text(player);
            if (player == Random){
            won();
          }
          else if ( player > Random){
            loss();
          } 
    })  
  //--------------------------------------------------------------
//red sox
    $('#four').on ('click', function(){
      player = player + num4;
     
      $('#total').text(player); 
        
            if (player == Random){
            won();
          }
          else if ( player > Random){
            loss();
          }
    });   
  }); 