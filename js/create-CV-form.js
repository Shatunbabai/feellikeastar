document.getElementById("regFormCV").addEventListener("submit", submitForm);

async function submitForm(event) {
    event.preventDefault();

    const isSended = JSON.parse(localStorage.getItem("svSended"));
    localStorage.setItem("svSended", JSON.stringify({
        sended: true
    }));
    console.log(isSended);

    if (isSended) {
        document
            .getElementById("regFormCV")
            .insertAdjacentHTML(
                "beforeend",
                `<p style="color: red; font-family: sans-serif;">Error sv already sended</p>`
            );
        return;
    }

    let formData = new FormData(event.target);

    let files = document.getElementById("file-input").files;

    if (files.length > 0) {
        formData.append(files[0].name, files[0]);

        formData.append("type", "CV");

        await fetch("https://quantum-projects.com/QuantumProjectBot.php", {
            method: "POST",
            body: formData,
        });
    }
}