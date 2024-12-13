/* Post */
let postForm = document.getElementById("post-form-container");
if (postForm){
    postForm.addEventListener('submit',post)
}
function post(e){
    e.preventDefault()

    const userPost ={
        input: document.getElementById("input").value
    }
    console.log(userPost)
}