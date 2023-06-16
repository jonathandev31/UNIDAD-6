// Funciones flechas aplicado al algoritmo de ordenaiento BubbleSort

let bubbleSort = ( inputArr ) => {
    let len = inputArr.length;
    for ( let i = 0; i < len; i++ ) {
        for ( let j = 0 ; j < len; j++ ) {
            if ( inputArr[ i ] > inputArr[ j + 1 ] ) {
                let tmp = inputArr[ j ];
                inputArr[ j ] = inputArr[ j + 1 ];
                inputArr[ j + 1 ] = tmp;
            }
        }
    }
    return inputArr;
}

inputArray = [ 2, 1, 0 ];

console.log (bubbleSort( inputArray ));

// Descomposicion 

// Funcion anonima tradicional 
(function (a) {
    return a + 100;
})

let a = 3;

// 1. Remover "function" y reemplazar con arrow entre el argumento

(a) => {
    return a + 100;
}

// 2. Remover el cuerpo y el "return" pues este ya esta implicito

(a) => a + 100;

// 3. Remover el parentesis del parametro

a => a + 100;