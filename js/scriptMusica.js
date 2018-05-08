 var _som = null;

 function tocarSom(src) {
     if (_som == null || !_som.playing) {
         _som = new Pizzicato.Sound(src, function () {
             _som.play();
         });
     }
 }

 function pararSom() {
     if (_som && _som.playing) {
         _som.pause();
     }
 }
