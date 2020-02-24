var lista = document.getElementById("lista")

var getUsername = async (id) =>{
    var response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    var data = await response.json();
    return data;
  };

  var getUserPost = async (id) =>{
      var response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
      var data = await response.json();
      return data;
  }

 async function getInfo(){
    var users = await getUsername();
    for(let i = 0; i < users.length; i++){
        var userposts = await getUserPost(users[i].id)
        create(JSON.stringify(users[i].name),JSON.stringify(userposts[i].title),JSON.stringify(userposts[i].body));
    }
 }

 function create(name,title,body){
 var div = document.createElement("div");    
 var img = document.createElement("img");

 var parNa = document.createElement("li");
 var parBo = document.createElement("p");

 var txtNa = document.createTextNode("User:" + name+ " Title:"+title);
 var txtBo = document.createTextNode(body);

 img.src = "./female.png";

 parNa.appendChild(txtNa);
 parBo.appendChild(txtBo);

 div.appendChild(img);
 div.appendChild(parNa);

 div.appendChild(parBo);
 lista.appendChild(div);
 }

 function test(){
     alert("Powered by Andrea Serrato")
 }
 
 getInfo();