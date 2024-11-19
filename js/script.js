const ulElement =document.getElementById('listaUsuarios')
const url=`https://jsonplaceholder.typicode.com/users`;



//Leemos los usuarios con fetch
function obtenerUsuarios(){
    fetch(url).then((response)=>{
        if (!response.ok){
            throw 'Solicitud sin respuesta'
        }
        return response.json();
    }).then ((arrUsuarios)=>{
        mostrarUsuarios(arrUsuarios) ;
        
    })
}


function mostrarUsuarios(arrUsuarios){
 
  arrUsuarios.forEach((usuario) => {


    //name, age, username, img, phone, email, company, address
// address tendrá estos datos como valor: usuario.address.street, usuario.address.suite, usuario.address.city
    //Destructuring del objeto usuario
    const {id, name,  username,  phone, email, company, address} = usuario;
 

    //spread operator. Crea un nuevo array con el objeto y con los nuevos datos a añadir (age, img, address con los nuevos datos)
    const nuevaUsuario = {...usuario,  imgUsuario:`../assets/img//${id}.jpeg` , edadUsuario:Math.floor((Math.random() * (40 - 20 + 1)) + 20)  };
 
    const addresUser={...address};
    const CompsUser={...company};
   
 


    const liElement =document.createElement('li');
    liElement.classList.add('item');

    const divCard=document.createElement('div');
    divCard.classList.add('divCard');

    //En este div añadinos los datos del usuario y el objeto img
    const divInfo_img =document.createElement('div');
    divInfo_img.classList.add('divInfo-img');

    //En divInfo añado los datos del usuario 
    const divInfo =document.createElement('div');
    divInfo.classList.add('divInfo');
    let info=`<p><strong>Nombre </strong>: ${name}</p><p><strong>Edad </strong>: ${nuevaUsuario.edadUsuario}</p>`;
    info+=`<p><strong>Username </strong>: ${username}</p><p><strong>Teléfono </strong>: ${phone}</p>`
    info+=`<p><strong>Email </strong>: ${email}</p>`
    divInfo.innerHTML= info;
    


    divInfo_img.appendChild(divInfo);

    //Añadimos la imagen
    const divImg =document.createElement('div');
    divInfo.classList.add('divImg');
    const imagUsuario =document.createElement('img');
    imagUsuario.src=nuevaUsuario.imgUsuario;
    imagUsuario.alt=`Imagen de ${nuevaUsuario.name}`
    divImg.appendChild(imagUsuario);
    divInfo_img.appendChild(divImg);


    const divComp_Addres =document.createElement('div');
    divComp_Addres.classList.add('divComp-addres');
    let compAddres=`<p><strong>Compañia </strong>: ${CompsUser.name}</p>`;
    compAddres+=`<p><strong>Dirección </strong>: ${addresUser.street}, ${addresUser.suite}, ${addresUser.city}</p>`;
    divComp_Addres.innerHTML= compAddres;

    divCard.appendChild(divInfo_img);
    divCard.appendChild(divComp_Addres);

    liElement.appendChild(divCard);
    ulElement.appendChild(liElement);
  });

}


//
obtenerUsuarios();