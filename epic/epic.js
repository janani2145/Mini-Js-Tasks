document.addEventListener("DOMContentLoaded", function () {
    const stephenMix = [
        "Adi penne",
        "Usuraye Tholachan",
        "Kannoram kannoram",
        "Nesamaguran",
        "Theruvoram",
        "Vilagathe",
        "Alli Pookal",
        "Unna Nenachan",
        "Saral Malaiyaa",
        "Sagiye",
        "Orasatha",
        "Enaku oru Aasai"
    ];

    const mixList = document.getElementById("mixList");
    const btnBox = document.getElementById("btn");
    const total = document.getElementById("total");
    
    btnBox.addEventListener("click", function () {
        btnBox.style.display = "none";
        mixInfo();
        if( btnBox.style.display === "none"){
            mixList.style.border="5px solid #fff";
        }
        else{
            mixList.style.border="none"; 
        }
    });

    total.innerText = `${stephenMix.length} GREAT SONGS !`;
   

    function mixInfo() {
        let items = stephenMix.map((song, i) => `<li class="nav-item pb-3 pt-3 fs-5 ps-5"><span class="p-2 me-2 " ># ${i+1}</span> ${song}</li>`).join('');
        mixList.innerHTML = items;
    }
});