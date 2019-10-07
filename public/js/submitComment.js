document.getElementById("submit-btn").addEventListener("click", (e) => {
    e.preventDefault();

    const body = {
        body: document.getElementById("comment-area").value,
        author: document.getElementById("author").value,
        id: document.getElementById("title").getAttribute("data-id")
    }
    // console.log({ body });
    axios.post("/api/comment", body)
})