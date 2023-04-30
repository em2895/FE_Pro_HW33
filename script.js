document.querySelector('button').addEventListener("click", event => {
    event.preventDefault();
    const formData = {
        Name: document.getElementById('name').value,
        Surname: document.getElementById('surname').value,
        Birthday: document.getElementById('birthday').value,
        Gender: document.querySelector('input[name="gender"]:checked').value,
        City: document.getElementById('city').value,
        Address: document.getElementById('address').value,
        Languages: [...document.querySelectorAll('input[type="checkbox"]:checked')].map(language => { 
                        return language.id 
                    }).join(', ')
    };

    document.querySelector('form').remove();
    renderTable(formData);
})


function renderTable(data) {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    table.setAttribute("width", "300px");
    tbody.setAttribute("align", "left");
    

    for (key in data) {
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        const td = document.createElement('td');
        th.innerText = key;
        td.innerText = data[key];
        tr.append(th);
        tr.append(td);

        tbody.append(tr);
    }

    table.append(tbody);
    document.querySelector('body').append(table);
}