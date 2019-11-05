const userList = document.querySelector('#usersList');

document.querySelector('#btn').addEventListener('click', () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/', true);

  xhr.addEventListener('load', function () {
    if (this.status === 200) {
      const users = JSON.parse(this.responseText);
      let output = '';
      for (const user in users) {
        output += `
         <article class="user-cnt" data-id="${users[user].id}">
        <h2 class="user-name">${users[user].name}</h2>
        <div class="address">
        Phone: ${users[user].phone}<br>
        email: 
        <a href="mailto: email@wp.pl">${users[user].email}</a>
        </div>
        
        <button type="button" close="true" class="btn show-posts">
        Show posts
        </button>
        
        <ul class="user-posts">
        <!-- tutaj będą posty użytkownika -->
        </ul>
        </article>`;
      }
      userList.innerHTML = output;

      document.querySelectorAll('.show-posts').forEach((el) => {
        el.addEventListener('click', (e) => {
          const xhrPosts = new XMLHttpRequest();
          xhrPosts.open('GET', 'https://jsonplaceholder.typicode.com/posts/', true);

          if (el.getAttribute('close') === 'true') {
            e.target.closest('.user-cnt').children[3].style.display = 'block';
            el.innerHTML = 'Hide posts';
            el.setAttribute('close', 'false');
          } else {
            e.target.closest('.user-cnt').children[3].style.display = 'none';
            el.innerHTML = 'Show posts';
            el.setAttribute('close', 'true');
          }


          xhrPosts.addEventListener('load', () => {
            if (this.status === 200) {
              const posts = JSON.parse(xhrPosts.responseText);

              for (const post in posts) {
                const compare = el.parentNode;

                if (posts[post].userId == compare.getAttribute('data-id')) {
                  el.parentNode.querySelector('.user-posts').innerHTML = `<li class="post">
                  <h3 class="post-title">${posts[post].title}</h3>
                  <div class="post-body">${posts[post].body}</div>
                  </li>`;
                }
              }
            }
          });
          xhrPosts.send();
        });
      });
    }
  });
  xhr.send();
});
