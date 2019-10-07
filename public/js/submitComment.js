document.getElementById("submit-btn").addEventListener("click", (e) => {
    e.preventDefault();

    const body = {
        comment: {
            body: document.getElementById("comment-area").value,
            author: document.getElementById("author").value,
        },
        id: document.getElementById("title").getAttribute("data-id")
    }
    // console.log({ body });
    axios.put("/api/scrape/add", body)
})