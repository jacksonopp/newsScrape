document.getElementById("submit-btn").addEventListener("click", (e) => {
    e.preventDefault();
    const body = {
        body: document.getElementById("comment-area").value,
        author: document.getElementById("author").value
    }
    console.log({ body });
    axios.post("/api/scrape/add", body)
})