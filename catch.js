
        let rndNumber;
        let token = "";
        let head = "";
        let eyes = "";
        let mouth = "";
        let hairs = "";
        let body = "";
        let nose = "";
        let wp = "";
        let ears = "";
        let more = "";
        let hat = "";
        let wplayer = "";
        let backpack = "";
        let dependandt = "";
        let dependantAlpha = 1; //setta valore di opacity per un determinato elemento - default 1 no opacity, 0 - invisibile
//le variabili EXCLUDED settate a TRUE inibiscono il draw dell'elemento di riferimento
        let excludeHead = false;
        let excludeEyes = false;
        let excludeMouth = false;
        let excludeHairs = false;
        let excludeBody = false;
        let excludeNose = false;
        let excludeWp = false;
        let excludeEars = false;
        let excludeMore = false;
        let excludeHat = false;
        let excludeWplayer = false;
        let excludeBackpack = false;
        let excludeDependant = false;

        var hsHead = new Image();  
        var hsEyes = new Image();
        var hsMouth = new Image();
        var hsHairs = new Image();
        var hsBody = new Image();
        var hsNose = new Image();
        var hsWp = new Image();
        var hsEars = new Image();
        var hsMore = new Image();
        var hsHat = new Image();
        var hsWpLayer = new Image();
        var hsBack = new Image();
        var hsDependant = new Image();
//---------------------------------------------HEADS  CASE -------------------------------------------------------------
rndNumber = Math.floor(Math.random()*100)+1 //restituisce un numero da 1 a 100 casualmente
switch(true){
case (rndNumber<70):
    hsHead.src = "head/pink.png";
    generateToken(rndNumber);
    head = "Pink";
    break;
case (rndNumber>=70 && rndNumber <90):
    hsHead.src = "head/tanned.png";
    generateToken(rndNumber);
    head = "Tanned";
    break;
case (rndNumber>=90):
    hsHead.src = "head/alien.png";
    generateToken(rndNumber);
    head = "Alien"
    break;
}
console.log("Head: "+ head);

//---------------------------------------------EYES  CASE -------------------------------------------------------------
rndNumber = Math.floor(Math.random()*100)+1 //restituisce un numero da 1 a 100 casualmente
    switch(true){
    case (rndNumber>90):
        hsEyes.src = "eyes/cat.png";
        generateToken(rndNumber);
        eyes = "Cat";
        break;
    case (rndNumber>80):
        hsEyes.src = "eyes/cute.png";
        generateToken(rndNumber);
        eyes = "Cute";
        break;
    case (rndNumber>70):
        hsEyes.src = "eyes/hole.png";
        generateToken(rndNumber);
        eyes = "Hole";
        break;
    case (rndNumber>60):
        hsEyes.src = "eyes/roundhalf.png";
        generateToken(rndNumber);
        eyes = "Round Half";
        break;
    case (rndNumber>50):
        hsEyes.src = "eyes/roundup.png";
        generateToken(rndNumber);
        eyes = "Round Up";
        break;
    case (rndNumber>40):
        hsEyes.src = "eyes/seagull.png";
        generateToken(rndNumber);
        eyes = "Seagull";
        break;
    case (rndNumber>30):
        hsEyes.src = "eyes/sew.png";
        generateToken(rndNumber);
        eyes = "Sew";
        break;
    case (rndNumber>20):
        hsEyes.src = "eyes/smallround.png";
        generateToken(rndNumber);
        eyes = "Small Round";
        break;
    case (rndNumber>0):
        hsEyes.src = "eyes/tired.png";
        generateToken(rndNumber);
        eyes = "Tired";
        break;
    }
    console.log("Eyes: " + eyes);

//---------------------------------------------MOUTH  CASE -------------------------------------------------------------
rndNumber = Math.floor(Math.random()*100)+1 //restituisce un numero da 1 a 100 casualmente
    switch(true){
    case (rndNumber>95):
        hsMouth.src = "mouth/gagball.png";
        generateToken(rndNumber);
        mouth = "GagBall";
        break;
    case (rndNumber>90):
        hsMouth.src = "mouth/clenched.png";
        generateToken(rndNumber);
        mouth = "Clenched";
        break;
    case (rndNumber>85):
        hsMouth.src = "mouth/closed.png";
        generateToken(rndNumber);
        mouth = "Closed";
        break;
    case (rndNumber>80):
        hsMouth.src = "mouth/controversy.png";
        generateToken(rndNumber);
        mouth = "Controversy";
        break;
    case (rndNumber>70):
        hsMouth.src = "mouth/creepysmile.png";
        generateToken(rndNumber);
        mouth  = "Creepy Smile";
        break;
    case (rndNumber>60):
        hsMouth.src = "mouth/fatty.png";
        generateToken(rndNumber);
        mouth = "Fatty";
        break;
    case (rndNumber>50):
        hsMouth.src = "mouth/laughteeth.png";
        generateToken(rndNumber);
        mouth = "Laugh Teeth";
        break;
    case (rndNumber>40):
        hsMouth.src = "mouth/round.png";
        generateToken(rndNumber);
        mouth = "Round";
        break;
    case (rndNumber>30):
        hsMouth.src = "mouth/tongue.png";
        generateToken(rndNumber);
        mouth = "Tongue";
        break;
    case (rndNumber>20):
        hsMouth.src = "mouth/tusk.png";
        generateToken(rndNumber);
        mouth = "Tusk";
        break;      
    case (rndNumber>0):
        hsMouth.src = "mouth/uoppi.png";
        generateToken(rndNumber);
        mouth = "Uoppi";
        break;

    }
    console.log("Mouth: "+mouth);
    //---------------------------------------------HAIRS  CASE -------------------------------------------------------------
rndNumber = Math.floor(Math.random()*100)+1 //restituisce un numero da 1 a 100 casualmente
    switch(true){
case (rndNumber>85):
    hsHairs.src = "hairs/allyno.png";
    generateToken(rndNumber);
    hairs = "Allyno";
    break;
case (rndNumber>70):
    hsHairs.src = "hairs/basso.png";
    generateToken(rndNumber);
    hairs = "Basso";
    break;
case (rndNumber>55):
    hsHairs.src = "hairs/luca.png";
    generateToken(rndNumber);
    hairs = "Luca";
    break;
case (rndNumber>40):
    hsHairs.src = "hairs/sgari.png";
    generateToken(rndNumber);
    hairs = "Sgari";
    break;
case (rndNumber>30):
    hsHairs.src = "hairs/wickerboy.png";
    generateToken(rndNumber);
    hairs  = "Wicker Boy";
    break;
case (rndNumber>20):
    hsHairs.src = "hairs/zano.png";
    generateToken(rndNumber);
    hairs = "Zano";
    break;
case (rndNumber>0):
    hsHairs.src = "hairs/zucche.png";
    generateToken(rndNumber);
    hairs = "Zucche";
    break;

}
    console.log("Hairs: "+ hairs);
    //---------------------------------------------body  CASE -------------------------------------------------------------
    rndNumber = Math.floor(Math.random()*100)+1 //restituisce un numero da 1 a 100 casualmente
    switch(true){
    case (rndNumber>85):
        hsBody.src = "body/777shirt.png";
        generateToken(rndNumber);
        body = "777 Shirt";
        break;
    case (rndNumber>70):
        hsBody.src = "body/hairybody.png";
        generateToken(rndNumber);
        body = "Hairy";
        break;
    case (rndNumber>55):
        hsBody.src = "body/milan.png";
        generateToken(rndNumber);
        body = "Milan T-Shirt";
        break;
    case (rndNumber>40):
        hsBody.src = "body/orangetshirt.png";
        generateToken(rndNumber);
        body = "Orange T-Shirt";
        break;
    case (rndNumber>20):
        hsBody.src = "body/russianshirt.png";
        generateToken(rndNumber);
        body  = "Russian T-Shirt";
        break;
    case (rndNumber>5):
        hsBody.src = "body/salopette.png";
        generateToken(rndNumber);
        body = "Salopette";
        break;
    case (rndNumber>0):
        hsBody.src = "body/netshirt.png";
        generateToken(rndNumber);
        body = "Net";
        break;
    
    }
    console.log("Body: "+ body);
    //---------------------------------------------NOSE  CASE -------------------------------------------------------------
    rndNumber = Math.floor(Math.random()*100)+1 //restituisce un numero da 1 a 100 casualmente
    switch(true){
    case (rndNumber>85):
        hsNose.src = "nose/clown.png";
        generateToken(rndNumber);
        nose = "Clown";
        break;
    case (rndNumber>70):
        hsNose.src = "nose/drunk.png";
        generateToken(rndNumber);
        nose = "Drunk";
        break;
    case (rndNumber>55):
        hsNose.src = "nose/french.png";
        generateToken(rndNumber);
        nose = "French Nose";
        break;
    case (rndNumber>40):
        hsNose.src = "nose/pig.png";
        generateToken(rndNumber);
        nose = "Pig";
        break;
    case (rndNumber>20):
        hsNose.src = "nose/round.png";
        generateToken(rndNumber);
        nose  = "Round";
        break;
    case (rndNumber>5):
        hsNose.src = "nose/skull.png";
        generateToken(rndNumber);
        nose = "Skull";
        break;
    case (rndNumber>0):
        hsNose.src = "nose/square.png";
        generateToken(rndNumber);
        nose = "Square";
        break;
    
    }
    console.log("Nose: "+ nose);  
    //---------------------------------------------wallpaper  CASE -------------------------------------------------------------
    rndNumber = Math.floor(Math.random()*100)+1 //restituisce un numero da 1 a 100 casualmente
    switch(true){
    case (rndNumber>85):
        hsWp.src = "wp/aquamarine.png";
        generateToken(rndNumber);
        wp = "Aquamarine";
        break;
    case (rndNumber>70):
        hsWp.src = "wp/darkorange.png";
        generateToken(rndNumber);
        wp = "Dark Orange";
        break;
    case (rndNumber>55):
        hsWp.src = "wp/green.png";
        generateToken(rndNumber);
        wp = "Green";
        break;
    case (rndNumber>40):
        hsWp.src = "wp/orange.png";
        generateToken(rndNumber);
        wp = "Orange";
        break;
    case (rndNumber>20):
        hsWp.src = "wp/pink.png";
        generateToken(rndNumber);
        wp  = "Pink";
        break;
    case (rndNumber>0):
        hsWp.src = "wp/purple.png";
        generateToken(rndNumber);
        wp = "Purple";
        break;
    
    }
    console.log("Wallpaper: "+ wp);
    //---------------------------------------------EARS  CASE -------------------------------------------------------------
    rndNumber = Math.floor(Math.random()*100)+1 //restituisce un numero da 1 a 100 casualmente
    switch(true){
    case (rndNumber>90):
        hsEars.src = "ears/big.png";
        generateToken(rndNumber);
        ears = "Big Ears";
        break;
    case (rndNumber>80):
        hsEars.src = "ears/goblin.png";
        generateToken(rndNumber);
        ears = "Golbin";
        break;
    case (rndNumber>70):
        hsEars.src = "ears/headphones.png"
        generateToken(rndNumber);
        ears = "Headphones";
        break;
    case (rndNumber>55):
        hsEars.src = "ears/horns.png";
        generateToken(rndNumber);
        ears = "Horns";
        break;
    case (rndNumber>30):
        hsEars.src = "ears/little.png";
        generateToken(rndNumber);
        ears = "Little Ears";
        break;
    case (rndNumber>1):
        hsEars.src = "";
        generateToken(rndNumber);
        ears = "Nothing";
        break;
    
    }
    console.log("Ears: "+ ears);
    //---------------------------------------------MORE  CASE -------------------------------------------------------------
    rndNumber = Math.floor(Math.random()*100)+1 //restituisce un numero da 1 a 100 casualmente
    switch(true){
    case (rndNumber > 99):
        hsMore.src = "more/censored.png";
        generateToken();
        more = "Censored";
        break;
    case (rndNumber>90):
        hsMore.src = "more/bigglasses.png";
        generateToken(rndNumber);
        more = "Big Glasses";
        break;
    case (rndNumber>80):
        hsMore.src = "more/monocole.png";
        generateToken(rndNumber);
        more = "Monocole";
        break;
    case (rndNumber>55):
        hsMore.src = "more/pirateband.png";
        generateToken(rndNumber);
        more = "Pirate Band";
        break;
    case (rndNumber>30):
        hsMore.src = "more/roundglasses.png";
        generateToken(rndNumber);
        more = "Round Glasses";
        break;
        case (rndNumber>1):
        hsMore.src = "";
        generateToken(rndNumber);
        more = "Nothing";
        break;
    
    }
    console.log("More: "+ more);
    //---------------------------------------------HAT  CASE -------------------------------------------------------------
    rndNumber = Math.floor(Math.random()*100)+1 //restituisce un numero da 1 a 100 casualmente
    switch(true){
    case (rndNumber > 99 && hsDependant.src == ""): //verifica che non ci siano altre immagini con dependant 
        hsHat.src = "hat/astronaut.png";
        hat = "Astronaut";
        excludeHairs = true;
        hsDependant.src = "hat/astronaut2.png";
        dependantAlpha = 0.6;
        break;
    case (rndNumber > 97):
        hsHat.src = "hat/piratehat.png";
        generateToken(rndNumber);
        hat = "Pirate Hat";
        excludeHairs = true;
        break;
    case (rndNumber>90):
        hsHat.src = "hat/happy.png";
        generateToken(rndNumber);
        hat = "Happy";
        break;
    case (rndNumber>80):
        hsHat.src = "hat/russian.png";
        generateToken(rndNumber);
        hat = "Russian";
        break;
        case (rndNumber>1):
        hsHat.src = "";
        generateToken(rndNumber);
        hat = "Nothing";
        break;
    
    }
    console.log("Hat: "+ hat);
    //---------------------------------------------wp Layer  CASE -------------------------------------------------------------
    rndNumber = Math.floor(Math.random()*100)+1 //restituisce un numero da 1 a 100 casualmente
    switch(true){
    case (rndNumber>90):
        hsWpLayer.src = "wplayer/asses.png";
        generateToken(rndNumber);
        wplayer = "Ass Hole";
        break;
    case (rndNumber>80):
        hsWpLayer.src = "wplayer/money.png";
        generateToken(rndNumber);
        wplayer = "Money";
        break;
        case (rndNumber>1):
        hsWpLayer.src = "";
        generateToken(rndNumber);
        wplayer = "Nothing";
        break;
    
    }
    console.log("Wallpaper Layer: "+ wplayer);
    //---------------------------------------------BACK  CASE -------------------------------------------------------------
    rndNumber = Math.floor(Math.random()*100)+1 //restituisce un numero da 1 a 100 casualmente
    switch(true){
    case (rndNumber>90):
        hsBack.src = "backpack/angelwings.png";
        generateToken(rndNumber);
        backpack = "Angel Wings";
        break;
    case (rndNumber>80):
        hsBack.src = "backpack/liquid.png";
        generateToken(rndNumber);
        backpack = "Liquid";
        break;
        case (rndNumber>70):
        hsBack.src = "backpack/sword.png";
        generateToken(rndNumber);
        backpack = "Sword";
        break;
    case (rndNumber>1):
        hsBack.src = "";
        generateToken(rndNumber);
        backpack = "Nothing";
        break;
    
    }
    console.log("Back: "+ backpack);



//-------GENERA TOKEN UNIVOCO IMMAGINE (HEAD-)
//ATTENZIONE CHE DUE IMMAGINI POSSONO AVERE DIVERSO TOKEN MA STESSO SET DI IMMAGINI
    function generateToken(slice){
        if (slice<10){
            token = token + "0" + slice.toString();
        } else {
            token = token + slice.toString();
        }
    }