function buildrobot()
{
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width=1024;                                                 //modifica grandezza dell'immagine
    canvas.height=1024;
    //wp
    if (!(excludeWp)) {ctx.drawImage(hsWp,((1024-hsWp.width)/2),0);};
    //wp extra
    if (!(excludeWplayer)) {ctx.drawImage(hsWpLayer,((1024-hsWpLayer.width)/2),0);};
    //back
    if (!(excludeBackpack)) {ctx.drawImage(hsBack,((1024-hsBack.width)/2),0);};
    //ears
    if (!(excludeEars)) {ctx.drawImage(hsEars,((1024-hsEars.width)/2),0);};
    //head
    if (!(excludeHead)) {ctx.drawImage(hsHead,((1024-hsHead.width)/2),0);};
    //body
    if (!(excludeBody)) {ctx.drawImage(hsBody,((1024-hsBody.width)/2),0);};
    //occhi
    if (!(excludeEyes)) {ctx.drawImage(hsEyes,((1024-hsEyes.width)/2),0);};
    //bocca
    if (!(excludeMouth)) {ctx.drawImage(hsMouth,((1024-hsMouth.width)/2),0);};
     //capelli
    if (!(excludeHairs)) {ctx.drawImage(hsHairs,((1024-hsHairs.width)/2),0);};
    //cap
    if (!(excludeHat)) {ctx.drawImage(hsHat,((1024-hsHat.width)/2),0);};
    //nose
    if (!(excludeNose)) {ctx.drawImage(hsNose,((1024-hsNose.width)/2),0);};
    //more
    if (!(excludeMore)) {ctx.drawImage(hsMore,((1024-hsMore.width)/2),0); }; 
    //dependant
    if (!(excludeDependant)) {
        ctx.globalAlpha = dependantAlpha;
        ctx.drawImage(hsDependant,((1024-hsDependant.width)/2),0);
    }; 

}