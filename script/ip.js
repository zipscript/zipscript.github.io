 fetch("https://api.ipify.org?format=json")
    .then(res=>res.json())
    .then(data=>{
   localStorage.setItem('ip',data.ip)
    })
    function ip(){
        return localStorage.getItem('ip')
    }
