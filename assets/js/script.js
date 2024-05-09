const getPersonajes = async() => {
    try{

        const response = await fetch("https://rickandmortyapi.com/api/character")
        const data = await response.json()
        return data.results;
    }catch(error){
        console.log(`el error es: ${error}`);
    }
}

getPersonajes()
    .then((data) => {
        crearCards(data);
    })
    .catch((error) => {
        console.log(`el error es: ${error}`);
    })

const crearCards = (results = [] ) =>{
    let personajesRow = document.getElementById("personajesRow")

    results.map((result) =>{
        const {id, name, image, species, status, location} = result;
        const {name : nameLocation} = location;

        //console.log(id, name, image, species, status, location);

        const divCol = document.createElement("div");
        divCol.classList.add("col-xl-3");
        divCol.classList.add("col-lg-3");
        divCol.classList.add("col-md-3");
        divCol.classList.add("col-sm-3");
        divCol.classList.add("col-xs-12");
        divCol.classList.add("mt-2");
        divCol.classList.add("mb-2");

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src=image;
        img.alt = `Imagen de ${name}`;
        img.classList.add("card-img-top");

        const divBody = document.createElement("div");
        divBody.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("text-tittle");
        title.textContent = `nombre: ${name}`;

        const subTitle = document.createElement("p");
        subTitle.classList.add("text-title");
        subTitle.textContent = `Especie: ${species}`;

        const subTitle2 = document.createElement("p");
        subTitle2.classList.add("text-title");
        subTitle2.textContent = `Status: ${status}`;
        
        const mLocation = document.createElement("p");
        mLocation.classList.add("text-title");
        mLocation.textContent = ` Localizacion: ${nameLocation}`;

        const btnVer = document.createElement("button");
        btnVer.classList.add("btn","btn-success");
        btnVer.textContent = "Ver mas";
        btnVer.addEventListener("click", () => {
            console.log(`El id es: ${id}`);
            console.log(`El nombre es: ${name}`);
            console.log(`La imagen es: ${image}`);
            console.log(`La espeice es: ${species}`);
            console.log(`El estado es: ${status}`);
            console.log(`La localizacion es: ${location}`);
        });

        divCol.appendChild(card);

        card.appendChild(img);
        card.appendChild(divBody);

        card.appendChild(title);
        card.appendChild(subTitle);
        card.appendChild(subTitle2);
        card.appendChild(mLocation);
        card.appendChild(btnVer);

        personajesRow.appendChild(divCol);

    })
}
getPersonajes()
    .then((data) => {crearCards(data)
    })
    .catch((error) => {console.log(`El error es: ${error}`);
    })