document.getElementById("terminalInput").addEventListener("keypress", e => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        e.currentTarget.closest("form").submit();
    }
});
