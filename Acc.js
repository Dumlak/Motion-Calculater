function calacc() {
    var Dis=document.getElementById('Dis').value;
    var ti=document.getElementById('ti').value;
    var iv=document.getElementById('iv').value;
    var fv=document.getElementById('fv').value;


    if(Dis===''){
        ti=parseFloat(ti);
        iv=parseFloat(iv);
        fv=parseFloat(fv);
        var result=(fv-iv)/ti;
        document.getElementById('result').innerHTML="result:"+result;
    }
    else if(fv===''){
        Dis=parseFloat(Dis);
        ti=parseFloat(ti);
        iv=parseFloat(iv);
        var result=2*(Dis-iv*ti)/(ti*ti);
        document.getElementById('result').innerHTML="result:"+result;
    }
    else if(iv===''){
        Dis=parseFloat(Dis);
        ti=parseFloat(ti);
        fv=parseFloat(fv);
        var result=2*(Dis-fv*ti)/(ti*ti);
        document.getElementById('result').innerHTML="result:"+result;
    }
    else{
        Dis=parseFloat(Dis);
        iv=parseFloat(iv);
        fv=parseFloat(fv);
        var result=((fv*fv)-(iv*iv))/(2*Dis);
        document.getElementById('result').innerHTML="result:"+result;
    }
    

}