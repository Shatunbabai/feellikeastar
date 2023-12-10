document.getElementById("regForm").addEventListener("submit", submitForm);

async function submitForm(event) {
    event.preventDefault();
    const isSended = JSON.parse(localStorage.getItem("formSended"));
    localStorage.setItem("formSended", JSON.stringify({
        sended: true
    }));
    console.log(isSended);

    if (isSended) {
        document
            .getElementById("regForm")
            .insertAdjacentHTML(
                "beforeend",
                `<p style="color: red; font-family: sans-serif;">Error form already sended</p>`
            );
        return;
    }

    let formData = new FormData(event.target);

    formData.append("type", "Client");

    await fetch("https://quantum-projects.com/QuantumProjectBot.php", {
        method: "POST",
        body: formData,
    });
}