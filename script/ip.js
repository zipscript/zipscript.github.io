 fetch("https://api.ipify.org?format=json")
    .then(res=>res.json())
    .then(data=>{
            function sendIp(status){
              if(status == 'true'){
                 sendMessage(`IP address[data.ip]`,"3301")
              }
            }      
    })
