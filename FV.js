function calfv() {
    var Dis=document.getElementById('Dis').value;
    var Acc=document.getElementById('Acc').value;
    var ti=document.getElementById('ti').value;
    var iv=document.getElementById('iv').value;


    if(iv===''){ 
        Acc=parseFloat(Acc);
        ti=parseFloat(ti);
        Dis=parseFloat(Dis);
        var result=(Dis-(0.5*Acc*ti*ti))/ti;
        document.getElementById('result').innerHTML="result:"+result;
    }
    else if (Acc===''){
        ti=parseFloat(ti);
        Dis=parseFloat(Dis);
        iv=parseFloat(iv);
        var result=((2*Dis)/ti)-iv;
        document.getElementById('result').innerHTML="result:"+result;
    }
    else if(ti===''){
        Dis=parseFloat(Dis);
        iv=parseFloat(iv);
        Acc=parseFloat(Acc);
        var sqn=(iv*iv)+(2*Acc*Dis);
        let result=Math.sqrt(sqn);
        document.getElementById('result').innerHTML="result:"+result;
    }
    else{
        iv=parseFloat(iv);
        ti=parseFloat(ti);
        Acc=parseFloat(Acc);
        var result=iv+(Acc*ti);
        document.getElementById('result').innerHTML="result:"+result;
    }
    

}