const kumpulanAyat = document.querySelector("#kumpulanAyat");

main()

async function main () {
    const response = await fetch("https://api.npoint.io/99c279bb173a6e28359c/surat/36");
    const result = await response.json();
    kumpulanAyat.innerHTML = undefined;
    for(const surat of result){
        kumpulanAyat.innerHTML += `
            <div class="my-5">
                <h2 class="text-white text-end mb-4" >${surat.ar}</h2>
                <h6 class="text-white text-end" >${surat.nomor}. ${surat.tr}</h6>
                <p class="p-2 text-secondary rounded text-end" style="width:100%" >${surat.id}</p>
            </div>
            <hr>
        `
    }
}