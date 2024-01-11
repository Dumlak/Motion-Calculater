function caltime() {
    var Dis=document.getElementById('Dis').value;
    var Acc=document.getElementById('Acc').value;
    var iv=document.getElementById('iv').value;
    var fv=document.getElementById('fv').value;


    if(Dis===''){
        iv=parseFloat(iv);
        fv=parseFloat(fv);
        Acc=parseFloat(Acc);
        var result=(fv-iv)/Acc;
        document.getElementById('result').innerHTML="result:"+result;
    }
    else{
        Dis=parseFloat(Dis);
        iv=parseFloat(iv);
        fv=parseFloat(fv);
        var result=(2*Dis)/(iv+fv);
        document.getElementById('result').innerHTML="result:"+result;
    }
    

}