class ProductView {

    display(products) {

        let rows = "";

        products.forEach((product,index)=>{

            rows += `
            <tr>

                <td>${index+1}</td>

                <td>${product.name}</td>

                <td>${product.price}</td>

                <td>${product.cate}</td>

                <td>${product.desc}</td>

                <td>
                    <button class="btn btn-warning update-btn"
                        data-index="${index}">
                        Update
                    </button>
                </td>

                <td>
                    <button class="btn btn-danger delete-btn"
                        data-index="${index}">
                        Delete
                    </button>
                </td>

            </tr>
            `;

        });

        document.getElementById("myTable").innerHTML = rows;
    }

    clearForm(inputs){

        inputs.forEach(input=>{

            input.value="";

            input.classList.remove("is-valid");
            input.classList.remove("is-invalid");

        });

    }

}