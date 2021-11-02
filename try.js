var page_no = 1;

//construction of queston array
const questions=new Array(5);
questions[0]="Which planet in our solar system is known as the Blue Planet?";
questions[1]="Who successfully built and flew the world's first Aeroplane?";
questions[2]="Who invented that plants have life?";
questions[3]="Who invented telephone?";
questions[4]="Who invented the Computer?";
//done .. construction of questionss array ...answers


//construction of options array .....
const opts_of_all=[];
let singleOption =[];
//option 1
singleOption.push("Naptune");
singleOption.push("Earth");
singleOption.push("Mars");
singleOption.push("Uranus");
opts_of_all.push(singleOption);

//option 2
singleOption=[];
singleOption.push("Alberto Santos-Dumont");
singleOption.push("Frank and Jesse James");
singleOption.push("Henry and William James");
singleOption.push("Orville and Wibur");
opts_of_all.push(singleOption);

//option 3
singleOption=[];
singleOption.push("Jagadish Chandra Bose");
singleOption.push("Vikram sarabhai");
singleOption.push("CV raman");
singleOption.push("Homi J Bhabha");
opts_of_all.push(singleOption);

//option 4


singleOption=[];
singleOption.push("Thomsa alve edisne");
singleOption.push("Gelellio");
singleOption.push("Grehambel");
singleOption.push("Bill Gates");
opts_of_all.push(singleOption);

//option 5
singleOption=[];
singleOption.push("Bjarne Stroustrup");
singleOption.push("Charles Babbage");
singleOption.push("Linus torwald");
singleOption.push("Steve Jobs");
opts_of_all.push(singleOption);

//done .... construction of options ....
 
 

 //costruction of answers array .... 
 const answers=new Array(5);
 answers[0]="Naptune";
 answers[1]="Orville and Wibur";
 answers[2]="Jagadish Chandra Bose";
 answers[3]="Grehambel";
 answers[4]="Charles Babbage";
 
 const ansId=[];
 ansId.push("opa");
 ansId.push("opd");
 ansId.push("opa");
 ansId.push("opc");
 ansId.push("opb");

 //done .... costruction of answers array ....

//  It can be detected by storing the previous scrollTop value and comparing the current scrollTop value with it.

//  JavaScript :


 

// ///////////////////////////////////////////////////////////////////////////// 
var lastScrollTop = 0;
 let task_name = document.getElementById("task_name");
 let task_nm;
 task_name.innerHTML  = "Aptitude test";

 let small_logo = document.getElementById("small_logo");
 document.addEventListener("scroll", function(event){ 
    var st = window.pageYOffset || document.documentElement.scrollTop; 
    if (st > lastScrollTop){
        task_name.innerHTML ="";        
    } else {
        task_name.innerHTML  = task_nm;
    }
    lastScrollTop = st <= 0 ? 0 : st; 
 }, false);

let mySetInterval;

const for_next_page = () => {
    // alert("dfoiewvnoe"+page_no);
    page_no++;
    document.getElementById('done_task').style.display='none';
    clearInterval(mySetInterval);
    document.getElementById('clock').style.display='none';
    switch(page_no)
    {
        case 1:
            document.getElementById('page1').style.display = 'block';                        
            // document.getElementById('task_name').innerHTML = "Typing test";                        
            break;
        case 2:
            // clearInterval(mySetInterval);
            document.getElementById('page2').style.display = 'block';
            document.getElementById('page1').style.display = 'none';
            document.getElementById('task_name').innerHTML = "Typing test";  
            task_nm="Typing test";                      
            page2();
            break;
            case 3:        
            document.getElementById('page3').style.display = 'block';
            document.getElementById('page2').style.display = 'none';
            document.getElementById('task_name').innerHTML = "Communication test";  
            task_nm="Communication test";                                            
            page3();
            break;
            case 4:
                document.getElementById('page4').style.display = 'block';
                document.getElementById('page3').style.display = 'none';
                task_nm="Information";                                            
            
            page4();
            break;
    }
};

document.getElementById("skip_task").onclick =for_next_page ;
document.getElementById("btn_next_task").onclick = for_next_page ;


// page-1 action

if( 1==page_no )
{
    // alert("this is pagge 1");
    let que_no=1;

    var score1=0;

    let min=19,sec=60;
    function displayTime(){
        document.getElementById('clock').innerHTML = `${min}:${sec}`;
        sec--;
        if(sec==0){
            min--;
            sec=60;
        }
        if(min==-1 && sec==60){
            clearInterval(mySetInterval);
        }
    }
    mySetInterval=setInterval(displayTime,  1000);


    fun(que_no);
    

    
    function  fun(question_no)
    {
        // alert('dfvubevui');
        // if(question_no<5){
            if( que_no>5 )
            {
                // all questions solved by user before time
                let done_task= document.getElementById('done_task');
                let done_task_h1=document.getElementById('done_task_h1');
                done_task_h1.innerHTML = "aptitude test  is completed\nclick on next task";
                done_task.style.display = 'block';
                document.getElementById('page1').style.display = 'none';
                clearInterval(mySetInterval);
                
                document.getElementById('clock').style.display = 'none';
                // page_no++;
            }
            else{
            let que = document.getElementById('que');
            let op1 = document.getElementById('opa');
            let op2 = document.getElementById('opb');
            let op3 = document.getElementById('opc');
            let op4 = document.getElementById('opd');
            que.innerHTML=questions[question_no-1];
            var myOptions=[op1,op2,op3,op4];
            for(let i=0 ; i<4 ; i++){
                myOptions[i].innerHTML=opts_of_all[question_no-1][i];
            }   

            }
    }
    let op1 = document.getElementById('opa');
    let op2 = document.getElementById('opb');
    let op3 = document.getElementById('opc');
    let op4 = document.getElementById('opd');
    const checkOpt=(e)=>{
        // alert("hello clickd opt");
        let selectedId=e.target.id;
        
        
        let selected=e.target.innerHTML;
        
        var opts=[op1,op2,op3,op4];
        
        console.log(selected);
        
        if( selected==answers[que_no-1]){
            score1++;
            document.getElementById(selectedId).className="text-light btn btn-success";
        }
        else
        {
            console.log("incor");
            document.getElementById(selectedId).className="text-light btn btn-danger";        
        }
        document.getElementById(ansId[que_no-1]).className="text-light btn btn-success";

        setTimeout(function(){ 
            document.getElementById(selectedId).className="text-dark btn btn-light";
            document.getElementById(ansId[que_no-1]).className="text-dark btn btn-light";
            
            que_no++; 
            fun(que_no);
            
         }, 1000);

        

    }
    op1.onclick=checkOpt;
    op2.onclick=checkOpt;
    op3.onclick=checkOpt;
    op4.onclick=checkOpt;

    //check that time for given task is complete.
    setTimeout(function(){ 
        let done_task= document.getElementById('done_task');
        let done_task_h1=document.getElementById('done_task_h1');

        
        done_task_h1.innerHTML = "time out\nclick on next task";
        done_task.style.display = 'block';
        document.getElementById('page1').style.display = 'none';
        document.getElementById('clock').style.display = 'none';
        // page_no++;
        
        
     }, 600000);
    
    document.getElementById('next_question').onclick = function(){
        que_no++;
        fun(que_no);
        
    }
}

    // from last page//////////////////////////////////////////////////////////////////////////////////
// if( page_no==3 )
// {
//     let done_task_h1=document.getElementById('done_task_h1').innerHTML = "All task is done";
//     document.getElementById('btn_next_task').innerHTML="show result";
// }
// else
    // from last page//////////////////////////////////////////////////////////////////////////////////




//////////////////////page 2 JS //////////////////////////////////
var accuracy=0;
let score=0,ind=0,prev_key=null ;
var speed=0,pressed_char;
var right_char=0,pressed_char=0;

const question= `eigerhberhbref`;
const fun = function(){ 
    // console.log("fun is called");

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
    if( ind==question.length )
    {
        console.log(ind + question.length);
        done_task_h1.innerHTML = "keyboard test  is completed\nclick on next task";
        done_task.style.display = 'block';
        var curr_time_str=document.getElementById('clock').innerHTML;
        curr_time_str =  curr_time_str.split(":") ;
        var mins=parseInt(curr_time_str[0]);
        var sec = parseInt(curr_time_str[1]);
        mins=mins*60;
        var total_sec=mins+sec;
        total_sec=300-total_sec;
        document.getElementById('page2').style.display = 'none';
        document.getElementById('clock').style.display = 'none';
        speed=pressed_char/total_sec;
        accuracy=(right_char*100)/pressed_char;
    }
 }


function page2()
{
    
    document.getElementById("skip_task").onclick = for_next_page ;
    document.getElementById('clock').style.display = 'block';
    let min=4,sec=60;
    function displayTime(){
        document.getElementById('clock').innerHTML = `${min}:${sec}`;
        sec--;
        if(sec==0){
            min--;
            sec=60;
        }
        if(min==-1 && sec==60){
            clearInterval(mySetInterval);
            accuracy=(right_char*100)/pressed_char;
            speed=pressed_char/300;

            
            done_task_h1.innerHTML = "time out\nclick on next task";
            done_task.style.display = 'block';
            document.getElementById('page2').style.display = 'none';
            document.getElementById('clock').style.display = 'none';
            
            
        }
    }
    mySetInterval=setInterval(displayTime,  1000);


 let keyboard=document.getElementById('keyboard');
 keyboard.addEventListener('click', function(){
  keyboard.innerHTML="" ;
  keyboard.style.borderColor="white";
    fun();
 })
}

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

var accuracy=0;
const KeyPress=(event)=>{
    // alert("KeyPress is called");
        const abcd="abcdefghijklmnopqrstuvwxyz";
        const str=document.getElementById('keyboard').value;
        const lastChar=str[str.length-1];     
        pressed_char++;
        if(lastChar==question[ind-1]){
            
            playSound(obj[lastChar]);
            right_char++;
        }
        else {
            document.getElementById(`${lastChar}`).style.backgroundColor="tomato";
            
            
            playSound(alert_sound);
            setTimeout(function(){
                const index=abcd.indexOf(lastChar);
                let color="";
                
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




///////////////////////////////////// page3////////////////////////////////////////////
var consistency=0;
function page3(){
    document.getElementById('clock').style.display = "block";
    document.getElementById('clock').innerHTML = "00:20";
    let min=0,sec=20;
    function displayTime(){
        document.getElementById('clock').innerHTML = `${min}:${sec}`;
        sec--;
        if(sec==0){
            min--;
            sec=60;
        }
        if(min==-1 && sec==60){
            clearInterval(mySetInterval);
            
    
            
            done_task_h1.innerHTML = "time out\nclick on next task";
            done_task.style.display = 'block';
            document.getElementById('page3').style.display = 'none';
            document.getElementById('clock').style.display = 'none';
            checking();
        }
    }
    
    document.getElementById('start').onclick=()=>{          
        mySetInterval=setInterval(displayTime,  1000);
      var speech = true;
            window.SpeechRecognition = window.SpeechRecognition
                            || window.webkitSpeechRecognition;

            const recognition = new SpeechRecognition();
            recognition.interimResults = true;
            recognition.continuous=true;
            const words = document.querySelector('.words');
            words.appendChild(ans);

            recognition.addEventListener('result', e => {
                var transcript = Array.from(e.results)
                    .map(result => result[0])
                    .map(result => result.transcript)
                    .join('')

                document.getElementById("ans").innerHTML = transcript;
                
            });
            
            if (speech == true) {
                recognition.start();
                recognition.addEventListener('end', recognition.start);
            }
        };

        const submit_function = function(){
            clearInterval(mySetInterval);
            
            
            
            done_task_h1.innerHTML = "speech recognitions completed\nclick on next task";
            done_task.style.display = 'block';
            document.getElementById('page3').style.display = 'none';
            document.getElementById('clock').style.display = 'none';
            checking();
            
        }
        document.getElementById('submit').onclick = submit_function;

        function checking()
        {
            // alert(consistency);
            let ques2 = document.getElementById('ques2').innerHTML;
            let a2 = document.getElementById('ans').innerHTML;
            console.log(ques2 +" "+ a2);
            let i=0;
            while( ques2.length>i && a2.length>i )
            {
                if( ques2[i]==a2[i] )
                    consistency++;
                i++;
            } 
            // alert(consistency);
            consistency=(consistency*100)/ques2.length;
        }    
    }

function page4()
{

    
}

const user={};
function submit_btn (){
        
    
    const u_name=document.getElementById('u_name').value;
    console.log(u_name);
    document.getElementById('page5').style.display = 'block';
    document.getElementById('page4').style.display = 'none';
    document.getElementById('c_name').innerHTML=u_name;
    document.getElementById('score1').innerHTML = score1;
    document.getElementById('speed').innerHTML = speed;
    document.getElementById('accuracy').innerHTML = accuracy;
    document.getElementById('consistency').innerHTML=consistency;
    
}