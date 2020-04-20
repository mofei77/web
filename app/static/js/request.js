function fetch(){
        url1 = '/api/hga025/?FStype=FT&rtype=re&isfuture=False';
        url2 = '/api/hga025/?FStype=OP&rtype=re&isfuture=False';
        url3 = '/api/hga025/?FStype=VB&rtype=re&isfuture=False';
        url4 = '/api/hga025/?FStype=TT&rtype=re&isfuture=False';
        url5 = '/api/hga025/?FStype=BK&rtype=re&isfuture=False';
        try{
            $.get(url1,function(result){document.getElementById('a').innerHTML=result.length;console.log(result)})
            $.get(url2,function(result){document.getElementById('b').innerHTML=result.length})
            $.get(url3,function(result){document.getElementById('c').innerHTML=result.length})
            $.get(url4,function(result){document.getElementById('d').innerHTML=result.length})
            $.get(url5,function(result){document.getElementById('e').innerHTML=result.length})
            }
     catch(err) {

            console.log(err.message)

        }

    }
    fetch()
    setInterval(function(){fetch()},30000)


			


