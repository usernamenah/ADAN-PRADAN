const tap= document.getElementById('fun');
let i=0;
let arr=['red','blue','green','yellow','grey','black','pink'];
function run(){
    tap.style.background = arr[i];
    i=i+1;
    if(i==arr.length){
        i=0;
    }
}
tap.addEventListener('click',run)