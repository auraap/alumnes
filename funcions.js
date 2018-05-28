function validarDni(inputDni){ //Aquesta funció comprova si el dni introduït és vàlid
    
    var lletres = 'TRWAGMYFPDXBNJZSQVHLCKET';
    
    var dniPatro = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
    
    var str = inputDni.toString().toUpperCase();
    
    
    if (!dniPatro.test(str)) return false;
    
    var dni = str
    var lletra = str.substr(-1);
    var posicioLletres = parseInt(dni.substr(0, 8)) % 23;
    
    
    if (lletres.charAt(posicioLletres) === lletra) return true;
    
    return false;
}

var app = angular.module("alumnes", []);
app.controller("AlumneController", //El controller accedeix a l'scope.
function ($scope) {
    $scope.alumnes = [];
    $scope.Insertar=function(){
        if (validarDni($scope.enviaralumne.dni)){
            $scope.alumnes.push({
                dni: $scope.enviaralumne.dni,
                nom: $scope.enviaralumne.nom, 
                llinatges: $scope.enviaralumne.llinatges,  
                correu: $scope.enviaralumne.correu, 
                nota: $scope.enviaralumne.nota
            });
            
            $scope.enviaralumne = null;
            
        }else{
            alert("El DNI introduït no és vàlid");
            //Si el dni introduït no és vàlid sortirà un avís
            
        }
        
        //amb aquesta funció podrem eliminar cada una de les files de la taula
        $scope.borrar = function(i){
            $scope.alumnes.splice(i, 1);
        }
    }
    
    
});