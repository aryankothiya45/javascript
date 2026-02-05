const posts = [
    { title : "post1", body : "this is post1"  },
    { title : "post2", body : "this is post2" }

];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>`;
        }) ;
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;

            if(!error){
                resolve();
            }else {
                reject("wrong");
            }
        },2000);
    })
}


//promise 
createPost({ title : "post3", body: "this is post3"}).then(getPosts);



//async/await
// async function init(){
//     await createPost({ title : "post3", body: "this is post3"});
//     getPosts();
// }
// init();


