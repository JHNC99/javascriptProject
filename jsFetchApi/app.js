// async function fetchText(){
//     let response=await fetch('date.txt');
//     console.log(response.status);
//     console.log(response.statusText);
//     if(response.status===200){
//         let data=await response.text();
//         console.log(data)
//     }
// }
// fetchText();
async function getUsers() {
    let url = 'users.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let users = await getUsers();
    let html = '';
    users.forEach(user => {
        let htmlSegment = `<div class="col">
                            <img src="${user.profileURL}" >
                            <h2>${user.firstName} ${user.lastName}</h2>
                            <div class="email"><a href="email:${user.email}">${user.email}</a></div>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.row');
    container.innerHTML = html;
}

renderUsers();