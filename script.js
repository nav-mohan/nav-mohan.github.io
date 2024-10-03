
const prepareAudio = function(){
    speakerIcon = document.getElementById('speaker-icon');
    audioBox = document.getElementById('audio-box');
    speakerIcon.addEventListener('click',function(){
        audioBox.play();
    })
}


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
            post_box = document.createElement('div');
            post_box.classList.add('post');
            
            post_img_box = document.createElement('div');
            post_img_box.classList.add("post-img");
            post_img = document.createElement('img');
            post_img.src = post['img'];
            post_img_box.appendChild(post_img);

            post_anchor_box = document.createElement('div');
            post_anchor_box.classList.add('post-anchor');
            post_anchor = document.createElement('a');
            post_anchor.href = post['link']
            post_anchor.innerText = post['title'];
            post_anchor_box.appendChild(post_anchor);

            post_desc_box = document.createElement('div');
            post_desc_box.classList.add('post-desc');
            post_desc_box.innerText = post['desc'];

            post_box.appendChild(post_img_box);
            post_box.appendChild(post_anchor_box);
            post_box.appendChild(post_desc_box);

            posts.appendChild(post_box)

        }
    })
}

window.addEventListener('load',loadData);
window.addEventListener('load',prepareAudio);