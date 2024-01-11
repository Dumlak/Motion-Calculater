function caldis() {
    var Acc=document.getElementById('Acc').value;
    var ti=document.getElementById('ti').value;
    var iv=document.getElementById('iv').value;
    var fv=document.getElementById('fv').value;

    if(fv===''){ 
        Acc=parseFloat(Acc);
        ti=parseFloat(ti);
        iv=parseFloat(iv);
        var result=(iv*ti)+(0.5*Acc)*(ti*ti);
        document.getElementById('result').innerHTML="result:"+result;
    }
    else if (Acc===''){
        ti=parseFloat(ti);
        iv=parseFloat(iv);
        fv=parseFloat(fv);
        var result=0.5*(iv+fv)*ti;
        document.getElementById('result').innerHTML="result:"+result;
    }
    else if(ti===''){
        iv=parseFloat(iv);
        fv=parseFloat(fv);
        Acc=parseFloat(Acc);
        var result=((fv*fv)-(iv*iv))/(2*Acc);
        document.getElementById('result').innerHTML="result:"+result;
    }
    else{
        fv=parseFloat(fv);
        ti=parseFloat(ti);
        Acc=parseFloat(Acc);
        var result=(fv*ti)-(0.5*Acc)*(ti*ti);
        document.getElementById('result').innerHTML="result:"+result;
    }
    

}