function reset()
{
    document.getElementById('nam1').innerText='\0'
    document.getElementById('nam1').innerText='\0'
    document.getElementById('tablid').value=''
}
function checnum(s)
{
	var dd = s.value
    if(!isNaN(dd))
    {
        dd = dd.substring(0,(dd.length-1))
        s.value = dd
    }	
}
function calc() 
{
	var fname = document.getElementById('yname').value
	var sname = document.getElementById('pname').value
	if (fname=='') { alert("Enter Your Name") }
	else if (sname=='') { alert("Enter Partner Name") }

    var r = /\s+/g
    var orfirst = document.first.name.value.toUpperCase()
    var nam=orfirst
    orfirst = orfirst.replace(r,"")
    if(orfirst!="")
    {
			var count = 0
            var first = orfirst	
            second = eval("document.first.name"+1).value.toUpperCase()
            var names=second
            second = second.replace(r,"")	
            if(second != "")
            {
                document.getElementById("tablid").style.display = 'block'
                    for(var i=0;i<first.length;i++)
                    {
                            for(var j=0;j<second.length;j++)
                            {
                                    if(first[i] == second[j])
                                    {
                                            var a1 = first.substring(0,i)
                                            var a2 = first.substring(i+1,first.length)
                                            first = a1+a2
                                            i=-1
                                            var b1 = second.substring(0,j)
                                            var b2 = second.substring(j+1,second.length)
                                            second = b1+b2
                                            j=-1
                                            break
                                    }
                            }
                    }
            
                    var ss=(first+second)
                    var l=ss.length
                    var ar = new Array("F", "L", "A", "M", "E", "S")
                    var stp=1
            
                    for(var x=6;x>1;x--)
                    {
                            var g=((l%x)+stp)-1
                            if(g>x)
                            {
                                    g=g%x
                            }
                            if(g==0)
                            {
                                    g=ar.length
                            }
                            ar.splice(g-1,1)
                            stp=g
                    }

                    if(ar=="F")
                    {
							document.getElementById("msg").innerText = 'FRIEND'
							document.getElementById("msg").style.color='blue'                  
                    }
                    else if(ar=="L")
                    {
							document.getElementById("msg").innerText = 'LOVE'
							document.getElementById("msg").style.color='#FF0080'
                    }
                    else if(ar=="A")
                    {
							document.getElementById("msg").innerText = 'AFFECTION'
							document.getElementById("msg").style.color='#DBA901'
                    } 
                    else if(ar=="M")
                    {
							document.getElementById("msg").innerText = 'MARRIAGE'
							document.getElementById("msg").style.color='green'
                    }
                    else if(ar=="E")
                    {	
							document.getElementById("msg").innerText = 'ENEMY'
							document.getElementById("msg").style.color='red'
                    }
                    else if(ar=="S")
                    {
							document.getElementById("msg").innerText = 'SISTER'
							document.getElementById("msg").style.color='violet'
                    }
                    document.getElementById("nam1").style.display = 'block'
                    document.getElementById("nam1").textContent=nam + " & " +names + '\t'
            }
            else
            {
                    document.getElementById("nam"+1).style.display = 'none'
                    count++ 
                    if(count==4)
                    {
                            alert("Enter anyone of your partner name")
                            document.getElementById("tablid").style.display = 'block'
                    }
            }          
    }
    else
    {
            return false
    }
}
