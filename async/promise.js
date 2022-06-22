function soma(x){
    // Simulando requisição no banco de dados
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            resolve(x + 5000);
        }, 3000);

    });
}

soma(230)
.then((resultado)=>{
    console.log(`Resolvido: ${resultado}`);
});