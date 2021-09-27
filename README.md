# AvatarHS

Simple random avatar generator versione 0.02

Author: Yanez
Language: italian

----------------------------------------------------------------------------------------------------------------------------------------------------
File builder.js
----------------------------------------------------------------------------------------------------------------------------------------------------
è presente il codice per disegnare l'immagine su schermo.
L'immagine png viene caricata nel canvas a meno che la variabile exclude - suffix (es. excludeHat) sia vera.
L'immagine hsDependant viene disegnata se è prevista ed è possibile passare un alpha dal catch dell'immagine per diminuire l'opacità.

I layer di disegno vengono stampati dal primo all'ultimo (il successivo copre il precedente)

            - Wallpaper
            - Wallpaper extra
            - Back
            - Ears
            - Head
            - Body
            - Eyes
            - Mouth
            - Hairs
            - Hat
            - Nose
            - More (extra)
            - dependant

----------------------------------------------------------------------------------------------------------------------------------------------------
File catch.js
----------------------------------------------------------------------------------------------------------------------------------------------------
è presente il codice per generare l'avatar.
Viene generato un numero casuale (rndNumber) da 1 a 100 per ogni asset e tramite uno switch / case si recupera il relativo file png (simulando la rarità degli asset, più rari sono più il rndNumber deve essere alto). Per i png per cui sono presenti due layer (1+1 dependant) viene verificato se è presente un altro asset con un png + dependant.
    TO DO:
    Sto pensando alla possibilità di aggiungere più livelli per i file dependant. Un front (per eventuali schermi e vetri) + uno rear (es. capelli lunghi) che per ora non è previsto.

Per aggiungere un file è sufficiente caricarlo nella cartella corrispondente e caricarlo aggiungendo le righe di codice sotto:

        case (rndNumber > NUMERO):
        hsExample.src = "posizione del file.png"
        generateToken(rndNumber);
        example = "nome del file";
        break;

        > sostituire hsExample con l'oggetto corrispondente (esempio hsHat per il layer dedicato ai cappelli)
        > sostituire example con ia variabile corrispondente (esempio hat per il layer dedicato ai cappelli)

La funzione generateToken(rndNumber) è da scrivere. Ad ora inserisce nella stringa token il numero rnd del layer appena generato (non funzionale in realtà)
