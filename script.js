const button = document.querySelector('.btn');
const text = document.querySelector('.card-text');
const compiling = document.querySelector('.compiling');
const output = document.querySelector('.output');



const addNewJoke = async () => {
    output.innerHTML = "";
    output.innerHTML = "";
    const jokeText = await getDadJoke();
    console.log(jokeText);
    text.innerHTML = `<p>${jokeText.joke}</p>`;

    let random = Math.round(Math.random() * 1);
    compiling.classList.add("animate__bounceInRight");
    compiling.innerHTML = "Compiling Joke..."
    setTimeout(function(){
        if(random===0){
            
            output.classList.add('animate__animated', 'animate__fadeInLeftBig');   
            setTimeout(function() {
             output.classList.remove('animate__animated', 'animate__fadeInLeftBig');
            }, 1000);
            output.innerHTML = `<p>Error.Failed to compile bad joke.</p>`

        }
        else{
            output.classList.add('animate__animated', 'animate__fadeInLeftBig');   
            setTimeout(function() {
            output.classList.remove('animate__animated', 'animate__fadeInLeftBig');
            }, 1000);
            output.innerHTML = `<p>OK! You may user it a dinner party.</p>`
        }

    }, 2000);




    
}
const getDadJoke = async () =>{
	const config = {headers: {Accept:'application/json'}}
	const res = await fetch("https://icanhazdadjoke.com/", config)
	return res.json();

}


button.addEventListener('click', addNewJoke);

