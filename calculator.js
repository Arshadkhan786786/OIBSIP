function equals(){
  var txt=document.form.textview.value;
  if(txt){
    let s='';
    let flag=0;
    for(let i=0;i<txt.length;i++){
      if(i+1<txt.length && txt[i]=='+' && txt[i+1]=='='){
        s+='+';
        i++;
      }
      else if(i+3<txt.length && txt[i]=='s' && txt[i+1]=='q' && txt[i+2]=='r' && txt[i+3]=='t' && txt[i+4]==' '){
        flag=1;
        i+=4;
      }
      else if(i+1<txt.length && txt[i]=='*' && txt[i+1]=='='){
        s+='*';
        i++;
      }
      else{
        s+=txt[i];
      }
    }
    if(flag==0)
    document.form.textview.value=eval(s);  
    else
    document.form.textview.value=Math.sqrt(s);
  }
  else
    document.form.textview.value='ERROR'
    
}
function insert(val){
    document.form.textview.value=document.form.textview.value+val;
  }
  
  function clean(){
    document.form.textview.value="";
  }
  
  function back(){
    var txt=document.form.textview.value;
    document.form.textview.value=txt.substring(0,txt.length-1);
  }