let que=document.getElementById("que");
let res=document.getElementById("res");
let BUKI=document.getElementById("BUKI");
let maru=document.getElementById("maru");
let batst=document.getElementById("batsu");
let cnt=30;
let sco=0;
let flag=true;
//タイマー処理
let time=setInterval(()=>{
    if (cnt>0){
        cnt--;
    
        res.textContent="スコア:"+sco+"|時間:"+cnt+"秒";

    }else{
        res.style.color="red";
        res.textContent="スコア:"+sco+"|終了";
        BUKI.src="img/ZENMETSU.png";
        flag=false;
        clearInterval(time);

    }
},1000);
let num=0;
let max=9;
let name=new Array(max);
name=["G7スカウト","RE-45","R301","モザンビーク","クレーバー","ディヴォーション","プラウラー","ヘムロック","フラットライン","ロングボウ"];
let seikai=new Array(max);
seikai=["〇","×","〇","×","×","〇","〇","×","×","〇"];
//〇をクリックしたとき
maru.addEventListener("click",()=>{
    if(flag){
        console.log("maru");
        if(seikai[num]=="〇"){
            console.log("正解");
            que.textContent="問題"+(num+1)+"正解";
            sco++;
       res.textContent="スコア:"+sco+"|時間:"+cnt+"秒";
    
     }else{
         console.log("不正解");
         que.textContent="問題"+(num+1)+"不正解";
     }
     if(num<max){
        num++; 

        setTimeout(()=>{
            que.textContent="問題"+(num+1)+" "+name[num];
            BUKI.src="img/BUKI"+num+".png";

        },1000)
        

       
       
        }else {
            BUKI.src="img/ZENMETSU.png";
            clearInterval(time);
            if (sco==max+1){
                BUKI.src="img/CHAMPION.png";
            }
            flag=false;
          }
        }
      });
//×をクリックしたとき
batsu.addEventListener("click",()=>{
    if(flag){

        console.log("batsu");
        if(seikai[num]=="×" ){
            console.log("正解");
            que.textContent="問題"+(num+1)+"正解";
       sco++;
       res.textContent="スコア:"+sco+"|時間:"+cnt+"秒";
         }else{
             console.log("不正解");
             que.textContent="問題"+(num+1)+"不正解";
         }
         if(num<max){
            num++;
        setTimeout(()=>{
            que.textContent="問題"+(num+1)+" "+name[num];
            BUKI.src="img/BUKI"+num+".png";

        },1000)
        
            
        }else{
            BUKI.src="img/ZENMETSU.png";
            clearInterval(time);
            if (sco==max+1){
                BUKI.src="img/CHAMPION.png";
            }
            flag=false;
          }
        }
      });