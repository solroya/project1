window.addEventListener("DOMContentLoaded", function(){
    const loadBtn = this.document.querySelector("#load_btn");
    const usersTbl = this.document.querySelector("#users_tbl")
    loadBtn.addEventListener("click", function(){
        //Data fetching
        const result = fetch("http://localhost:3000/getAllUsers").then((res) => res.json()).then((data) =>{
            // console.log(data);
            data.forEach((el) => {
                // console.log(element, index);
                const row = document.createElement("tr"); //tr 태그 생성
                row.innerHTML= `
                <td>${el.id}</td>
                <td>${el.name}</td>
                <td>${el.email}</td>
                <td>${el.reg_date}</td>
                <td>${el.sns}</td>
                <td>${el.intro}</td>
                `;
                usersTbl.appendChild(row);
            })
            loadBtn.disabled = true;
        });
        
    })

})