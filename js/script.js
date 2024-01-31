// Datos
const estadosMexico = ["Hidalgo", "Puebla", "Oaxaca"];

const municipiosHidalgo = ["Ixmiquilpan", "Tezontepec de Aldama", "Mixquiahuala"];
const localidadesIxmiquilpan = ["El Espíritu", "El Night", "Taxadho"];
const localidadesTezontepec = ["Acayutlan", "Panuaya", "Tenango"];
const localidadesMixquiahuala = ["Tepeitic", "Taxhuada", "El Calvario"];

const municipiosPuebla = ["Acatlán", "Ixtepec", "Jalpan"];
const localidadesAcatlan = ["Colonia Allende", "Piedra Blanca", "Los Parajes"];
const localidadesIxtepec = ["San Rafael", "Patiy", "Ixtepec"];
const localidadesJalpan = ["Acoyotitla", "Agua Linda", "El Naranjal"];

const municipiosOaxaca = ["Ayotzintepec", "San Juan Yatzona", "San Lorenzo"];
const localidadesAyotzintepec = ["Monte Mario", "Arroyo Cal", "Ayotzintepec"];
const localidadesSanJuan = ["San Juan Yatzona", "San Antonio", "San Juan"];
const localidadesLorenzo = ["San Lorenzo", "Piedra Blanca", "Santa María Yosocani"];

function cargarEstados() {
    const paisSeleccionado = document.getElementById("pais").value;
    const estadoSelect = document.getElementById("estado");

    // Llenar el select de estados dependiendo del país seleccionado
    if (paisSeleccionado === "mexico") {
        limpiarSelect(estadoSelect);
        estadosMexico.forEach((estado) => {
            const option = document.createElement("option");
            option.value = estado.toLowerCase();
            option.text = estado;
            estadoSelect.add(option);
        });
    } else {
        // Puedes agregar más países y sus estados aquí
    }

    cargarMunicipios(); // Llama a la función para cargar los municipios automáticamente
}

function cargarMunicipios() {
    const estadoSeleccionado = document.getElementById("estado").value;
    const municipioSelect = document.getElementById("municipio");
    limpiarSelect(municipioSelect);

    switch (estadoSeleccionado) {
        case "hidalgo":
            agregarOpcionesSelect(municipiosHidalgo, municipioSelect);
            break;
        case "puebla":
            agregarOpcionesSelect(municipiosPuebla, municipioSelect);
            break;
        case "oaxaca":
            agregarOpcionesSelect(municipiosOaxaca, municipioSelect);
            break;
        default:
            // Puedes agregar más estados y sus municipios aquí
            break;
    }

    cargarLocalidades(); // Llama a la función para cargar las localidades automáticamente
}

function cargarLocalidades() {
    const municipioSeleccionado = document.getElementById("municipio").value;
    const localidadSelect = document.getElementById("localidad");
    limpiarSelect(localidadSelect);

    switch (municipioSeleccionado.toLowerCase()) {
        case "ixmiquilpan":
            agregarOpcionesSelect(localidadesIxmiquilpan, localidadSelect);
            break;
        case "tezontepec de aldama":
            agregarOpcionesSelect(localidadesTezontepec, localidadSelect);
            break;
        case "mixquiahuala":
            agregarOpcionesSelect(localidadesMixquiahuala, localidadSelect);
            break;
        case "acatlán":
            agregarOpcionesSelect(localidadesAcatlan, localidadSelect);
            break;
        case "ixtepec":
            agregarOpcionesSelect(localidadesIxtepec, localidadSelect);
            break;
        case "jalpan":
            agregarOpcionesSelect(localidadesJalpan, localidadSelect);
            break;
        case "ayotzintepec":
            agregarOpcionesSelect(localidadesAyotzintepec, localidadSelect);
            break;
        case "san juan yatzona":
            agregarOpcionesSelect(localidadesSanJuan, localidadSelect);
            break;
        case "san lorenzo":
            agregarOpcionesSelect(localidadesLorenzo, localidadSelect);
            break;
        default:
            // Puedes agregar más municipios y sus localidades aquí
            break;
    }
}


function agregarOpcionesSelect(opciones, selectElement) {
    opciones.forEach((opcion) => {
        const option = document.createElement("option");
        option.value = opcion.toLowerCase();
        option.text = opcion;
        selectElement.add(option);
    });
}

function limpiarSelect(selectElement) {
    // Limpiar todas las opciones de un select
    while (selectElement.options.length > 0) {
        selectElement.remove(0);
    }
}

function mostrarDatos() {
    const pais = document.getElementById("pais").value;
    const estado = document.getElementById("estado").value;
    const municipio = document.getElementById("municipio").value;
    const localidad = document.getElementById("localidad").value;

    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = `<p>País: ${pais}</p>
                                <p>Estado: ${estado}</p>
                                <p>Municipio: ${municipio}</p>
                                <p>Localidad: ${localidad}</p>`;
}

// Llama a cargarEstados al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    cargarEstados();
});
