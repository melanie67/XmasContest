/**
 * Help the Christmas elves fetch presents in a magical labyrinth!
 **/


// game loop
while (true) {
    const turnType = parseInt(readline());
    var lignes = new Array();
    for (let i = 0; i < 7; i++) {
        var inputs = readline().split(' ');
        var ligne = new Array();
        for (let j = 0; j < 7; j++) {
            const tile = inputs[j];
            var uneCase = {
                haut: tile.substring(0,1),
                droite: tile.substring(1,2),
                bas: tile.substring(2,3) ,
                gauche: tile.substring(3,4)
            };
            ligne.push(uneCase);
        }
        lignes.push(ligne);
    }
    for (let i = 0; i < 2; i++) {
        var inputs = readline().split(' ');
        const numPlayerCards = parseInt(inputs[0]); // the total number of quests for a player (hidden and revealed)
        const playerX = parseInt(inputs[1]);
        const playerY = parseInt(inputs[2]);
        const playerTile = inputs[3];
        if(i == 0){
            var maColonne = playerX;
            var maLigne = playerY;
            //printErr(inputs[3]);
            //printErr(playerTile);
            var maCase = {
                haut: playerTile.substring(0,1),
                droite: playerTile.substring(1,2),
                bas: playerTile.substring(2,3) ,
                gauche: playerTile.substring(3,4)
            };
        }
    }
    var mesObjets = new Array();
    const numItems = parseInt(readline()); // the total number of items available on board and on player tiles
    for (let i = 0; i < numItems; i++) {
        var inputs = readline().split(' ');
        const itemName = inputs[0];
        const itemX = parseInt(inputs[1]);
        const itemY = parseInt(inputs[2]);
        const itemPlayerId = parseInt(inputs[3]);
        if(itemPlayerId === 0){
            var monObjet = new Array();
            monObjet.push(itemX);
            monObjet.push(itemY);
            monObjet.push(itemName);
            mesObjets.push(monObjet);    
        }
    }
    const numQuests = parseInt(readline()); // the total number of revealed quests for both players
    var mesQuetes = new Array();
    for (let i = 0; i < numQuests; i++) {
        var inputs = readline().split(' ');
        const questItemName = inputs[0];
        const questPlayerId = parseInt(inputs[1]);
        if(questPlayerId === 0){
            mesQuetes.push(questItemName);
        }
    }

    // Write an action using print()
    // To debug: printErr('Debug messages...');
    var objectif = trouverObjet(mesQuetes, mesObjets);
    // printErr("ma colonne est " + objectif.colonne + " ma ligne est " + objectif.ligne);
    //printErr("ma position est Col : " + maColonne + " Ligne : " + maLigne);
    //printErr("haut: " + maCase.haut + "Droite : "+ maCase.droite + "Bas : "+maCase.bas + "Gauche : " +maCase.gauche);
    if(turnType === 0){
        print('PUSH 3 RIGHT'); // PUSH <id> <direction> | MOVE <direction> | PASS
    }else{
        print(findMove());    
    }
}

    function trouverObjet(quetes,objets){
        objetDeQuete = quetes[0];
        for(let i=0;i<objets.length;i++){
            if(objets[i][2] === objetDeQuete){
                objectifColonne = objets[i][0];
                objectifLigne = objets[i][1];
                return {colonne : objectifColonne, ligne : objectifLigne};
            }
        }
    }
    
    function meDeplacer(){
        return ("PASS");
    }
    
    function findMove(){
        var move = "MOVE";
        //si je ne suis pas sur la première ligne, je peux aller plus haut 
        if(maColonne > 0){
            if(maCase.haut == 1){
                //caseEnHautY = maLigne - 1; 
                //if(lignes[caseEnHautY][maColonne].bas == 1){
                    printErr("je peux aller en haut");
                    move += " UP";
                //}
            }
        }

       // si je ne suis pas sur la dernière ligne, je peux aller plus bas    
        if(maLigne < 6){
            if(maCase.bas == 1){
                //caseEnBasY = maLigne + 1;
                //if(lignes[caseEnBasY][maColonne].haut == 1){
                    printErr("je peux aller en bas");
                    move += " DOWN";
                //}
            }
        }
        // si je ne suis pas tout à gauche, je peux y aller
        if(maColonne > 0 ){
            if(maCase.gauche == 1){
                //caseDeGaucheX = maLigne - 1;
                //if(lignes[maLigne][caseDeGaucheX].droite == 1){
                    printErr("je peux aller à gauche");
                    move += " LEFT";
                //}
            }
        }
        if(maColonne < 6){
            if(maCase.droite == 1){
                //caseDeDroiteX = maColonne + 1; 
                //if(lignes[maLigne][caseDeDroiteX].gauche == 1){
                    printErr("je peux aller à droite");
                    move += " RIGHT";
                //}
            }
        }
        if(move == "MOVE"){
            return ("PASS");
        }else{
            return move;
        }
    }
    
    function trouverChemin(maPosition,objectif){
        var nbTours
        // si on ne trouve plus de chemin
        if(findMove() == "PASS"){
            return move;
        }
    }
    
  function findMoveBis(){

    //maColonne maLigne;
    var move = "PASS";
    // si je ne suis pas sur la première ligne, je peux aller plus haut
    if(maLigne > 0 ){
        //si je peux aller en haut
        if(maCase.haut === 1){
            printErr("je peux aller en haut");
            //trouver case du dessus
            caseEnHautY = maLigne - 1; 
            if(lignes[caseEnHautY][maColonne].bas === 1){
                move = "MOVE UP";
                return move;
            }
        }     
    // si je ne suis pas sur la dernière ligne, je peux aller plus bas    
    }else if(maLigne < 6){
        // si je peux aller en bas
        printErr("Bas :" + maCase.bas + " Haut: "+maCase.haut + " Droite : "+maCase.droite + " Gauche : "+maCase.gauche);
        if(maCase.bas === 1){
            printErr("je peux aller en bas");
             caseEnBasY = maLigne + 1;
             if(lignes[caseEnBasY][maColonne].haut === 1){
                move = "MOVE DOWN";
                return move;
            }
         }
    }
    // si je ne suis pas tout à gauche, je peux y aller
    if(maColonne > 0 ){
        // si je peux aller à gauche
        if(maCase.gauche === 1){
            printErr("je peux aller à gauche");
             caseDeGaucheX = maLigne - 1;
             if(lignes[maLigne][caseDeGaucheX].droite === 1){
                move = "MOVE LEFT";
                return move;
            }
        }
    }else if(maColonne < 6){
        //si je peux aller à droite
        if(maCase.droite === 1){
            printErr("je peux aller à droite");
            //trouver case de droite
            caseDeDroiteX = maColonne + 1; 
            if(lignes[maLigne][caseDeDroiteX].gauche === 1){
                move = "MOVE RIGHT";
                return move;
            }
        }
    }

    return move;
}   
    
