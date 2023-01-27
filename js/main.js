function getCardNum(str){
  if(str.length == 16 && !isNaN(Number(str))){
    if(str.startsWith("8600")){
      console.log("Bu uzkard");
    }else if (str.startsWith("9860")){
      console.log("Bu Humo");
    }
  }else{
    console.log('Karta aniqlanmadi');
  }

}

getCardNum('9860567891234561')