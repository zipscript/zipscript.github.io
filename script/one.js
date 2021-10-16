var data=`<script src="https://zipscript.github.io/script/aes.js"></script>
<script src="https://cdn.jsdelivr.net/gh/emn178/js-sha256/build/sha256.min.js"></script>
<style>
    *{
        margin: 0px;
        padding: 0px;
        background: rgb(0, 0, 0);
    }
    img{
        width:150px;
        display: block;
        
        margin: auto;
        margin-top:100px;
        text-align: center;
    }
    .login{
        display: block;
        margin: auto;
        text-align: center;
        margin-top:160px;
    }
    input{
        background: white;
        display: block;
        margin: auto;
        width:300px;
        height:35px;
        margin-top:20px;
        padding-left:10px;
        outline: none;
        border: 3px solid rgb(133, 133, 133);
    }
    button{
        width:300px;
        height:33px;
      
        background: rgb(206, 206, 206);
        display:none;
        margin: auto;
        text-align: center;
        margin-top:20px;
    }
    #error{
        color: rgb(252, 0, 0);
        font-family: monospace;
        display: none;
        margin: auto;
        text-align: center;
        margin-top:20px;
        font-size:18px;
    }
</style>
<div class="login">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Seal_of_the_U.S._National_Security_Agency.svg/1200px-Seal_of_the_U.S._National_Security_Agency.svg.png" alt="">
    <br><br>
    <input type="text" id="username" placeholder="Enter username" autocomplete="off">
    <input type="password" onkeyup="n(this.value)" id="password" placeholder="Enter password">
    <p id="error">Error !</p>
    <button id="btn"  onclick="login()">Login</button>

</div>
<p class="tit">National Security Agency, abbr. NSA [a-en-bá] is a division of the US Department of Defense, which is part of the US Intelligence Community as an independent intelligence agency, engaged in electronic, scientific and technical intelligence, cyber intelligence, military counterintelligence, defense</p>
<script>
    function n(t){
       if(t.length >3){
           document.getElementById('btn').style.display="block";
       }
       if(t.length <3){
        document.getElementById('btn').style.display="none";
       }
    }

function login(){
    // 4813494d137e1631bba301d5acab6e7bb7aa74ce1185d456565ef51d737677b2
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    if(sha256(username) == "4813494d137e1631bba301d5acab6e7bb7aa74ce1185d456565ef51d737677b2"){
        fetch('https://zipscript.github.io/bz/data.txt')
        .then(res=>res.text())
        .then(data=>{
            document.write(decrypt(data,password));
        })
    }
    if(sha256(username) != '4813494d137e1631bba301d5acab6e7bb7aa74ce1185d456565ef51d737677b2'){
        document.getElementById('error').style.display="block";
    }
}
</script>`;


function login(){
    document.write(data)
}
