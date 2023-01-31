const callfetch=()=>{
    const url = "https://puga123.000webhostapp.com/html/servicio.json";
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(data=>mostrar(data))
    .catch((reject)=>{
        console.log("Ocurrio un error" + reject);
    })

    function mostrar(data){
      //  for(item of data){
       //     console.log(item);
        //}
        const res = document.getElementById('tabla');
        let total = document.getElementById('tot'); 
        let totgan = 0;
        res.innerHTML="";
        res.innerHTML="<tr>" +
        "<th class='tblId'>ID</th>"+
        "<th class='tblidUsr'>ID Cliente</th>"+
        "<th class='tblDes'>Descripcion</th>"+
        "<th class='tblCant'>Cantidad</th>"+
        "<th class='tblPV'>Precio vta.</th>"+
        "<th class='tblPC'>Precio Compra</th>"+
        "<th class='tblGan'>Ganancia</th>"+
        "</tr>";
        for(let item of data ){
            totgan += (item.preciovta * item.preciocompra) * item.cantidad;
            res .innerHTML+= "<tr>"+
            "<th>"+item.codigo+"</th>"+
            "<th>"+item.idcliente+"</th>"+
            "<th>"+item.descripcion+"</th>"+
            "<th>"+item.cantidad+"</th>"+
            "<th>"+item.preciovta+"</th>"+
            "<th>"+item.preciocompra+"</th>"+
            "<th>"+(item.preciovta*item.preciocompra)*item.cantidad+"</th>"+
            "</tr>"
            total.innerHTML = "El totales Ganancia:$ " + totgan;
        
            
        }
        
        
    }
}



const btnCargar = document.getElementById('btnCargar');
btnCargar.addEventListener('click',function(){
    callfetch();
    
})