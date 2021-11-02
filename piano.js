// const question= `revgreuvhroevh`;



// let score=0,i=0;

// const fun = function(){ 
//     // console.log(q);
//     // alert("ia m invoked");
//     let q = question[i]
//     document.getElementById(q).style.backgroundColor  = "red" ; //press this
    
//     document.addEventListener('keypress', (event) => {
//         // event.key = ;
//         if( event.code == q )
//         {
//             document.getElementById(q).className = "btn btn-outline-success";
//             score++;
//         }
//         else{
//             document.getElementById(q).className = "btn btn-outline-danger";
//         }
//         // Alert the key name and key code on keydown
//         // alert(`Key pressed  \r\n Key code value: ${code}`);
//       });
//       i++;
//       if( i==question.length )
//       {
//           clearInterval(mySetInterval);
//       }
//  };
 
//  const mySetInterval= setInterval(fun, 2000 );
//  clearInterval(mySetInterval);
// for(let j=0;j<question.length;j++){
    
    // }
        // setTimeout(fun(question[i]),2000);
//    function f(){
//        console.log("hii")
//    }
//    set
 
//  for(let i=0 ; i<question.length ; i++ )
//  {
    //  console.log(question[i]);
    //  fun(question[i]);
    //  setTimeout(fun(question[i]), 1000);
    
    // console.log(question[2]);
    // const prevClass=document.getElementById(question[i]).className;
    // document.getElementById(question[i]).style.backgroundColor  = "dodger-blue" ; //press this
    // document.addEventListener('keypress', (event) => {
    //     // event.key = ;
    //     if( event.code == question[i] )
    //     {
    //         document.getElementById(question[i]).className = "btn btn-outline-success";
    //         score++;
    //     }
    //     else{
    //         document.getElementById(question[i]).className = "btn btn-outline-danger";
    //     }
    //     // Alert the key name and key code on keydown
    //     alert(`Key pressed ${name} \r\n Key code value: ${code}`);
    //   });
// }

// let accuracy = ;



const question= `eirefwefzqwefgergvo`;
let score=0,ind=0,prev_key=null ;
const fun = function(){ 
    console.log("fun is called");

    let Ev = document.getElementById(`${question[ind]}`);

    Ev.style.backgroundColor="dodgerblue" ; //press this
    

    if(0!=ind && ind<=question.length)
    {
        let TV = document.getElementById(`${question[ind-1]}`);
        if( question.charCodeAt(ind-1)%2 )
            TV.style.backgroundColor="white";
        else
            TV.style.backgroundColor="black" ; //press this
    }
    ind++;

 let keyboard=document.getElementById('keyboard');
 keyboard.addEventListener('click', function(){
  keyboard.innerHTML="" ;
  keyboard.style.borderColor="white";
//   keyboard.style.outlineColor="white";
    // keyboard.style.display="none";
    fun();
 })
}

// keyboard.addEventListener('keyup' , keypressfun , false);

// $("#keyboard").click(function(){
//     // $("#keyboard").hide();
//     fun();
// })

const a = new Audio("sounds/C4.mp3");
const b = new Audio("sounds/Db4.mp3");
const c = new Audio("sounds/D4.mp3");
const d = new Audio("sounds/Eb4.mp3");
const e = new Audio("sounds/E4.mp3");
const f = new Audio("sounds/F4.mp3");
const g = new Audio("sounds/Gb4.mp3");
const h = new Audio("sounds/G4.mp3");
const i = new Audio("sounds/Ab4.mp3");
const j = new Audio("sounds/A4.mp3");
const k = new Audio("sounds/Bb4.mp3");
const l = new Audio("sounds/B4.mp3");
const m = new Audio("sounds/C5.mp3");
const n = new Audio("sounds/Db5.mp3");
const o = new Audio("sounds/D5.mp3");
const p = new Audio("sounds/Eb5.mp3");
const q = new Audio("sounds/E5.mp3");
const r = new Audio("sounds/C4.mp3");
const s = new Audio("sounds/Db4.mp3");
const t = new Audio("sounds/D4.mp3");
const u = new Audio("sounds/Eb4.mp3");
const v = new Audio("sounds/E4.mp3");
const w = new Audio("sounds/E5.mp3");
const x = new Audio("sounds/Gb4.mp3");
const y = new Audio("sounds/F4.mp3");
const z = new Audio("sounds/D5.mp3");
const alert_sound =new Audio("sounds/alert.mp3");
const obj={};
obj['a']=a;
obj['b']=b;
obj['c']=c;
obj['d']=d;
obj['e']=e;
obj['f']=f;
obj['g']=g;
obj['h']=h;
obj['i']=i;
obj['j']=j;
obj['k']=k;
obj['l']=l;
obj['m']=m;
obj['n']=n;
obj['o']=o;
obj['p']=p;
obj['q']=q;
obj['r']=r;
obj['s']=s;
obj['t']=t;
obj['u']=u;
obj['v']=v;
obj['w']=w;
obj['x']=x;
obj['y']=y;
obj['z']=z;
const playSound = audio => {
    const clone = audio.cloneNode();
    clone.play();
    setTimeout(() => (clone.volume = 0.8), 400);
    setTimeout(() => (clone.volume = 0.6), 800);
    setTimeout(() => (clone.volume = 0.4), 1200);
    setTimeout(() => (clone.volume = 0.2), 1600);
    setTimeout(() => (clone.volume = 0), 2000);
  };
  
const KeyPress=(event)=>{
// function() {
        // alert("Press");
        const abcd="abcdefghijklmnopqrstuvwxyz";
        const str=document.getElementById('keyboard').value;
        const lastChar=str[str.length-1];
        // if( prev_key != null )
        // {
        //     console.log(prev_key);
        //     let prev=document.getElementById(prev_key);
        //     console.log(charCodeAt(prev_key));
        //     if( charCodeAt(prev_key)%2 )
        //         prev.style.background="white";
        //     else{
        //         prev.style.background="black";
        //     }
        // }
        // console.log(lastChar + " " + question[ind-1])
        if(lastChar==question[ind-1]){
            // document.getElementById(`${lastChar}`).style.backgroundColor="mediumseagreen";
            playSound(obj[lastChar]);
        }
        else {
            document.getElementById(`${lastChar}`).style.backgroundColor="tomato";
            // document.getElementById(question[ind-1]).style.backgroundColor="mediumseagreen";
            playSound(alert_sound);
            setTimeout(function(){
                const index=abcd.indexOf(lastChar);
                let color="";
                // alert(index);
                if(index % 2 == 0){
                    color="white";
                }else{
                    color="black";
                }
                document.getElementById(`${lastChar}`).style.backgroundColor=color;
            },700);
        }   
         prev_key = lastChar;
         fun();
};






  
