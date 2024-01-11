function caliv() {
    var Dis=document.getElementById('Dis').value;
    var Acc=document.getElementById('Acc').value;
    var ti=document.getElementById('ti').value;
    var fv=document.getElementById('fv').value;


    if(fv===''){ 
        Acc=parseFloat(Acc);
        ti=parseFloat(ti);
        Dis=parseFloat(Dis);
        var result=(Dis-(0.5*Acc*ti*ti))/ti;
        document.getElementById('result').innerHTML="result:"+result;
    }
    else if (Acc===''){
        ti=parseFloat(ti);
        Dis=parseFloat(Dis);
        fv=parseFloat(fv);
        var result=((2*Dis)/ti)-fv;
        document.getElementById('result').innerHTML="result:"+result;
    }
    else if(ti===''){
        Dis=parseFloat(Dis);
        fv=parseFloat(fv);
        Acc=parseFloat(Acc);
        var sqn=(fv*fv)-(2*Acc*Dis);
        let result=Math.sqrt(sqn);
        document.getElementById('result').innerHTML="result:"+result;
    }
    else{
        fv=parseFloat(fv);
        ti=parseFloat(ti);
        Acc=parseFloat(Acc);
        var result=fv-(Acc*ti);
        document.getElementById('result').innerHTML="result:"+result;
    }
    

}