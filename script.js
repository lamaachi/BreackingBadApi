async function getData(){ 
    const respense = await fetch("https://www.breakingbadapi.com/api/characters")
    const data = await respense.json()
    console.log(data)
    let characters = [];

    //set names in options
    data.forEach(element => {
        characters.push(element.name)
        document.querySelector('#actor-name').innerHTML += `<option value="${element.name}">${element.name}</option>`;
    });

    let select = document.querySelector('select');
    select.onchange = (e)=>{
        data.forEach(element=>{
            if(e.target.value==element.name){
                document.querySelector('img').src = element.img
                document.querySelector('h4').innerText = element.name
                document.querySelector('.date').innerText = element.birthday
                document.querySelector('.category').innerText = element.category
                document.querySelector('.nickname').innerText = element.nickname
            }
        })
    }
}
getData();
