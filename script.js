posts = document.getElementById("posts");

const loadData = function(){
    fetch('posts.json')
    .then(function(res){
        console.log(res);
        if(res.status!==200){
            console.log('error');
        }
        return (res.json())
    })
    .then(function(post_details){
        for (let i = 0; i < post_details['posts'].length; i++) {
            const post = post_details['posts'][i];
            post_div = document.createElement('div');
            post_desc = document.createElement('div');
            post_desc.innerHTML = '<h3>' + post['desc'] + '</h3>';
            post_desc.classList.add('description');
            post_img = document.createElement('img');
            post_img.src = post['img']
            post_anchor = document.createElement('a');
            post_anchor.href = post['link']
            post_anchor.innerText = post['title']

            post_div.appendChild(post_img)
            post_div.appendChild(post_desc)
            post_div.appendChild(post_anchor)

            post_div.classList.add('post');
            posts.appendChild(post_div)

        }
    })
}

window.addEventListener('load',loadData);