//UI VAR
const form=document.getElementById('formulario');
const  tweet=document.getElementById('tweet');
const listaTweets=document.getElementById('lista-tweets');

EventListener();
function EventListener(){
    form.addEventListener('submit',addTweet);
    //borrraTwett
    listaTweets.addEventListener('click',borrarTweet);
    //tweetLSloaded
    document.addEventListener('DOMContentLoaded',getTweet);

}

function getTweet(){
   let tweets;

     if (localStorage.getItem('tweets')===null) {
          tweets=[];
     }
     else{
          tweets=JSON.parse(localStorage.getItem('tweets'));
     }
     
     tweets.forEach(function(tweet){

     const li=document.createElement('li');
     li.appendChild(document.createTextNode(tweet));
     //btn Borrar
     const btnBorrar=document.createElement('a');
     btnBorrar.className='borrar-tweet';
     btnBorrar.innerText='X';

     li.appendChild(btnBorrar);

     listaTweets.appendChild(li);    
     });
}


//add tweet
 function addTweet(e){
     if(tweet.value===''){
     	alert('add Tweet');
     }
     const li=document.createElement('li');
     li.appendChild(document.createTextNode(tweet.value));
     //btn Borrar
     const btnBorrar=document.createElement('a');
     btnBorrar.className='borrar-tweet';
     btnBorrar.innerText='X';

     li.appendChild(btnBorrar);

     listaTweets.appendChild(li);

     //addTweetLS
     addTwettLS(tweet.value);

     e.preventDefault();
 }

 //agregar al local Storage

 function addTwettLS(tweet){
     let tweets;

     if (localStorage.getItem('tweets')===null) {
          tweets=[];
     }
     else{
          tweets=JSON.parse(localStorage.getItem('tweets'));
     }
     tweets.push(tweet);
     localStorage.setItem('tweets',JSON.stringify(tweets));
 }

 function borrarTweet(e){
     e.preventDefault();
      if(e.target.className==='borrar-tweet'){
          if (confirm('Are you sure remoce Tweet')) {
                e.target.parentElement.remove();
                borrarTweetLS(e.target.parentElement.innerText);
          }
    }
 }
 function borrarTweetLS(tweetItem){
      let tweets,tweetBorrar;
      tweetBorrar=tweetItem.substring(0,tweetItem.length-1);
     if (localStorage.getItem('tweets')===null) {
          tweets=[];
     }
     else{
          tweets=JSON.parse(localStorage.getItem('tweets'));
     }
     tweets.forEach((tweet,index)=>{
          if (tweetBorrar===tweet) {
               tweets.splice(index,1);
          }
     });
      localStorage.setItem('tweets',JSON.stringify(tweets));
 }
