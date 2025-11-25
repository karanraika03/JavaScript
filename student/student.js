const Categories = [];

function onEdit(index) {
    document.getElementById('Name').value = Categories[index].name;
    document.getElementById('FatherName').value = Categories[index].FatherName;
    document.getElementById('Class').value = Categories[index].Class;
    document.getElementById('index').value = index;
    document.getElementById('btnSubmit').innerText = 'Update';
}

function onSubmit() {
    const Category = {};
    const name = document.getElementById('Name').value;
    const FatherName = document.getElementById('FatherName').value;
    const Class = document.getElementById('Class').value;
    const index = document.getElementById('index').value;

    document.getElementById('Name').value = "";
    document.getElementById('FatherName').value = "";
    document.getElementById('Class').value = "";

    Category.name = name;
    Category.FatherName = FatherName;
    Category.Class = Class;

    const buttonText = document.getElementById('btnSubmit').innerText;

    if (buttonText === 'Submit') {
        Categories.push(Category);
    } else {
        Categories[index] = Category;
        document.getElementById('btnSubmit').innerText = 'Submit';
    }

    getList();
}

function onDelete(index) {
    Categories.splice(index, 1);
    getList();
}

function getList() {
    let listBuilderHtml = `
      <table>
        <tr>
          <th>Roll No</th>
          <th>Name</th>
          <th>Father Name</th>
          <th>Class</th>
          <th>Action</th>
        </tr>`;

    for (let i = 0; i < Categories.length; i++) {
        listBuilderHtml += `
        <tr>
          <td>${i + 1}</td>
          <td>${Categories[i].name}</td>
          <td>${Categories[i].FatherName}</td>
          <td>${Categories[i].Class}</td>
          <td>
            <button class="action-btn edit-btn" onclick='onEdit(${i})'>Edit</button>
            <button class="action-btn delete-btn" onclick='onDelete(${i})'>Delete</button>
          </td>
        </tr>`;
    }

    listBuilderHtml += `</table>`;
    document.getElementById('list').innerHTML = listBuilderHtml;
}
