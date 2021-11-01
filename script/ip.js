 fetch("https://api.ipify.org?format=json")
    .then(res=>res.json())
    .then(data=>{
   localStorage.setItem('ip',data.ip)
          function online(key){
             sendMessage(data.ip,key)
          }
    })
    function ip(){
        return localStorage.getItem('ip')
    }
