<head>
    <title>HappySquidAvatarGenerator</title>

<script>


    window.onload = function()
    {
        //testa
        var robothead = new Image();
        var robotheadnum = Math.floor(Math.random()*3)+1;                   //se aumenti il numero di teste cambia il moltiplicatore
        var robotheadname = "head" + robotheadnum + ".png";
        robothead.src = robotheadname;

        //occhi
        var roboteyes = new Image();
        var roboteyesnum = Math.floor(Math.random()*9)+1;                   
        var roboteyesname = "eyes" + roboteyesnum + ".png";
        roboteyes.src = roboteyesname;

        //bocca
        var robotmouth = new Image();
        var robotmouthnum = Math.floor(Math.random()*10)+1;                   
        var robotmouthname = "mouth" + robotmouthnum + ".png";
        robotmouth.src = robotmouthname;

        //capelli
        var robothairs = new Image();
        var robothairsnum = Math.floor(Math.random()*7)+1;                   
        var robothairsname = "hairs" + robothairsnum + ".png";
        robothairs.src = robothairsname;

        //corpo
        var robotbody = new Image();
        var robotbodynum = Math.floor(Math.random()*7)+1;                   
        var robotbodyname = "body" + robotbodynum + ".png";
        robotbody.src = robotbodyname;

        //naso
        var robotnose = new Image();
        var robotnosenum = Math.floor(Math.random()*7)+1;                   
        var robotnosename = "nose" + robotnosenum + ".png";
        robotnose.src = robotnosename;
                
        //wp
        var robotwp = new Image();
        var robotwpnum = Math.floor(Math.random()*6)+1;                   
        var robotwpname = "wp" + robotwpnum + ".png";
        robotwp.src = robotwpname;

        //orecchie
        var robotears = new Image();
        var robotearsnum = Math.floor(Math.random()*4)+1;                   
        var robotearsname = "ears" + robotearsnum + ".png";
        robotears.src = robotearsname;

        //extra sopra viso
        var robotmore = new Image();
        var robotmorenum = Math.floor(Math.random()*4)+1;                   
        var robotmorename = "more" + robotmorenum + ".png";
        robotmore.src = robotmorename;

        //extra cappelli
        var robotcap = new Image();
        var robotcapnum = Math.floor(Math.random()*2)+1;                   
        var robotcapname = "cap" + robotcapnum + ".png";
        robotcap.src = robotcapname;






        //testa carica
        robothead.onload = function()
        {
            buildrobot();
        }
        //occhi carica
        roboteyes.onload = function()
        {
        buildrobot();
        }
        //bocca carica
        robotmouth.onload = function()
        {
        buildrobot();
        }
        //bocca carica
        robothairs.onload = function()
        {
        buildrobot();
        }
        //body carica
        robotbody.onload = function()
        {
        buildrobot();
        }
        //nose carica
        robotnose.onload = function()
        {
        buildrobot();
        }
        //wp carica
        robotwp.onload = function()
        {
        buildrobot();
        }
        //ears carica
        robotears.onload = function()
        {
        buildrobot();
        }
        //extra carica
        robotmore.onload = function()
        {
        buildrobot();
        }       
        //cap carica
        robotcap.onload = function()
        {
        buildrobot();
        }


        function buildrobot()
        {
            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext('2d');
            canvas.width=2048;                                                 //modifica grandezza dell'immagine
            canvas.height=2048;
            let rnd

            //wp
            ctx.drawImage(robotwp,((2048-robotwp.width)/2),50);
            //ears
            rnd = Math.floor(Math.random()*100)+1
            if(rnd > 90)
            {
                ctx.drawImage(robotears,((2048-robotears.width)/2),50);
            }
            //testa
            ctx.drawImage(robothead,((2048-robothead.width)/2),50);
            //body
            ctx.drawImage(robotbody,((2048-robotbody.width)/2),50);
            //occhi
            ctx.drawImage(roboteyes,((2048-roboteyes.width)/2),50);

            //cap
            rnd = Math.floor(Math.random()*100)+1
            if(rnd>90)
            {
                ctx.drawImage(robotcap,((2048-robotcap.width)/2),50);
            }
            //capelli
            ctx.drawImage(robothairs,((2048-robothairs.width)/2),50);

            //bocca
            ctx.drawImage(robotmouth,((2048-robotmouth.width)/2),50);

            //nose
            ctx.drawImage(robotnose,((2048-robotnose.width)/2),50);
            
            //more
            rnd = Math.floor(Math.random()*100)+1
            if(rnd > 90)
            {
                ctx.drawImage(robotmore,((2048-robotmore.width)/2),50);
            }

        
        }

    }


</script>

</head>
<body>
    <div align="center">

        <canvas id="canvas" style="border:5px solid #000000;"></canvas>
        <br><br>
        <button onClick="window.location.reload();">Genera il tuo cosetto</button>

    </div>
</body>