class ProductController{

    constructor(model,view){

        this.model=model;
        this.view=view;

        this.currentIndex=null;

        this.name=document.getElementById("pName");
        this.price=document.getElementById("pPrice");
        this.cate=document.getElementById("pCat");
        this.desc=document.getElementById("pDesc");

        this.addBtn=document.getElementById("addBtn");
        this.updateBtn=document.getElementById("updateBtn");

        this.inputs=[
            this.name,
            this.price,
            this.cate,
            this.desc
        ];

        this.updateBtn.style.display="none";

        this.loadProducts();

        this.events();

    }

    events(){

        this.addBtn.onclick=()=>this.addProduct();

        this.updateBtn.onclick=()=>this.updateProduct();

        document.getElementById("myTable").onclick=(e)=>{

            if(e.target.classList.contains("delete-btn")){

                this.deleteProduct(e.target.dataset.index);

            }

            if(e.target.classList.contains("update-btn")){

                this.fillForm(e.target.dataset.index);

            }

        }

    }

    loadProducts(){

        this.view.display(this.model.getAll());

    }

    addProduct(){

        let product={

            name:this.name.value,

            price:this.price.value,

            cate:this.cate.value,

            desc:this.desc.value

        };

        if(this.model.exists(product.name)){

            alert("Product already exists.");

            return;

        }

        this.model.add(product);

        this.loadProducts();

        this.view.clearForm(this.inputs);

    }

    deleteProduct(index){

        this.model.delete(index);

        this.loadProducts();

    }

    fillForm(index){

        this.currentIndex=index;

        let product=this.model.getAll()[index];

        this.name.value=product.name;
        this.price.value=product.price;
        this.cate.value=product.cate;
        this.desc.value=product.desc;

        this.addBtn.style.display="none";
        this.updateBtn.style.display="inline-block";

    }

    updateProduct(){

        let product={

            name:this.name.value,

            price:this.price.value,

            cate:this.cate.value,

            desc:this.desc.value

        };

        this.model.update(this.currentIndex,product);

        this.loadProducts();

        this.view.clearForm(this.inputs);

        this.updateBtn.style.display="none";
        this.addBtn.style.display="inline-block";

    }

}