class SingleBookModel{

    constructor(id="#",book_name="#",book_description="#",author_id="#",author_name="#",about_author="#",category="#",brrowed_date="#",user_name="#",user_id="#",image="#"){
    // this.short_id=GLOBAL_ID;
    this.id=id;
    this.book_name=book_name;
    this.book_description=book_description;
    this.author_id=author_id
    this.author_name=author_name;
    this.about_author=about_author;
    this.category=category;   
    this.brrowed_date=brrowed_date;
    this.user_name=user_name;
    this.user_id=user_id;
    this.image =image;
    }
  }

var singleBookData = new SingleBookModel();
function editThisBook(){
    sessionStorage.setItem("single_book",JSON.stringify(singleBookData));
    window.location.href="Admin_add_new_book.html?query=singleBook";
}

function functionDisplayData(){
    singleBookData= fetchBookData();
    parameters=new URLSearchParams(window.location.search);
    query= parameters.get('query');
    if(query=="borrowed_book"){
        document.getElementById("borrowed_by").style.display="inline-block";
        document.getElementById("borrowed_by").innerHTML=singleBookData.user_name;
    }


    document.getElementById("book_name").innerHTML=singleBookData.book_name;
    document.getElementById("author_name").innerHTML=singleBookData.author_name;
    document.getElementById("about_author").innerHTML=singleBookData.about_author;
    document.getElementById("description").innerHTML=singleBookData.book_description;
    document.getElementById("book_category").innerHTML=singleBookData.category;
    
    if(singleBookData.image=="#"){
        
    document.getElementById("book_image").src="{% static 'Media/default-book-cover.jpg' %}";
    }
    else{
        document.getElementById("book_image").src="{% static '" + singleBookData.image + "' %}";

    }
    }

function fetchBookData(){
    try{
        string_data =sessionStorage.getItem("single_book");
        data=JSON.parse(string_data);
    }catch(error){
        console.log(error);
        data= new SingleBookModel();
    }
    // single_book_data= new SingleBookModel(id=data.id
    // ,book_name=data.book_name,book_description=data.book_description,author_id=data.author_id
    // ,author_name=data.author_name,about_author=data.about_author,category=data.category,
    // brrowed_date=data.brrowed_date,user_name=data.user_name,user_id=data.user_id,image=data.image)
 
    return data;
}
