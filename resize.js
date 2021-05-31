window.onload = function () {
    var w_dispo = window.innerWidth;
    var h_dispo = window.innerHeight;

    var cv_w = w_dispo - (w_dispo*0.1);
    var cv_h = cv_w * (30/21);

    while (cv_h > (h_dispo - 27)*0.9) {
        cv_w -= 1;
        cv_h = cv_w * (30/21);
    } 

    if (w_dispo < 800) {
        document.getElementById('cv').style.height = `${cv_h}px`
        document.getElementById('cv').style.width = `${cv_w}px`
        document.getElementById('cv').style.marginTop = `${(h_dispo - cv_h - 60)/2}px`
        
    }

    /**************** */
    if (window.innerWidth <= 800) {
        var h_cv = document.getElementById('cv').offsetHeight;
        var h_jeu = document.getElementById('ss').offsetHeight;
        document.getElementById('progress_bar').style.top = `${h_jeu + ((h_cv/2)-(h_jeu/2)) + 15}px`;
        document.getElementById('jeu').style.top = `${(h_cv/2) - (h_jeu/2)}px`;
        document.getElementById('jeu').style.left = `${(window.innerWidth/2) - (h_jeu/2)}px`;
    }
    
    window.addEventListener("resize", function(event) {
        var w_dispo = window.innerWidth;
        var h_dispo = window.innerHeight;
    
        var cv_w = w_dispo - (w_dispo*0.1);
        var cv_h = cv_w * (30/21);

        while (cv_h > (h_dispo - 27)*0.9) {
            cv_w -= 1;
            cv_h = cv_w * (30/21);
        } 
    
        if (w_dispo < 800) {
            document.getElementById('cv').style.height = `${cv_h}px`
            document.getElementById('cv').style.width = `${cv_w}px`
            document.getElementById('cv').style.marginTop = `${(h_dispo - cv_h - 60)/2}px`
            
        }

        else {
            document.getElementById('cv').style.height = 'unset'
            document.getElementById('cv').style.width = 'unset'
            document.getElementById('cv').style.marginTop = 'unset'
        }
    })   
}



