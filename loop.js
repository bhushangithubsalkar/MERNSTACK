function lo(event)
{  let tab=document.getElementById("lo");
    for(let i=1;i<11;i++)
    {
        tab.innerHTML+="27 x "+i+" = "+(27*i)+"<br>";
    }
}
lo(new Event("submit"));