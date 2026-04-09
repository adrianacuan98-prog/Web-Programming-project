window.onload = function () {
    const today = new Date();
    const lastLogin = today.toLocaleDateString();
    document.getElementById("last-login").textContent = lastLogin;

    const editButton = document.getElementById("edit-btn");

    editButton.onclick = function () {
        const currentName = document.getElementById("user-name").textContent;
        const newName = prompt("Enter your new name:", currentName);

        if (newName !== null && newName.trim() !== "") {
            document.getElementById("user-name").textContent = newName;
            alert("Profile updated successfully!");
        }
    };
};