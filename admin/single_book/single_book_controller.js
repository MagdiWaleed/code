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

function functionDisplayData(){
    
    singleBookData= fetchBookData();
    document.getElementById("book_name").innerHTML=singleBookData.book_name;
    document.getElementById("author_name").innerHTML=singleBookData.author_name;
    document.getElementById("about_author").innerHTML=singleBookData.about_author;
    if(singleBookData.image=="#"){
        
    document.getElementById("book_image").src='/references/images/default-book-cover.jpg';
    }
    else{
        document.getElementById("book_image").src=singleBookData.image;

    }
    }

function fetchBookData(){
    try{
        string_data =sessionStorage.getItem("single_book");
        data=JSON.parse(string_data);
    }catch(error){
        console.log(error);
    }
    single_book_data= new SingleBookModel(id=data.id
    ,book_name=data.book_name,book_description=data.book_description,author_id=data.author_id
    ,author_name=data.author_name,about_author=data.about_author,category=data.category,
    brrowed_date=data.brrowed_date,user_name=data.user_name,user_id=data.user_id,image=data.image)
 
    return single_book_data;
}