var images = ["https://www.happywalagift.com/wp-content/uploads/2016/05/Baby-and-Mom-picture-wallpapers-mothers-day.jpeg", "https://tse4.mm.bing.net/th?id=OIP.-CN4RiX5xIgQdmiVYk7s-QHaLG&pid=Api&P=0&w=300&h=300", "https://images.indianexpress.com/2019/05/brothers-day_1-1.jpg?w=759", "https://tse1.mm.bing.net/th?id=OIP.DoasmDbzpktwuZgM3zHa5QHaJb&pid=Api&P=0&w=300&h=300", "https://tse2.mm.bing.net/th?id=OIP.kRF_GsjoWzrUnIK3Yl2kIwHaLH&pid=Api&P=0&w=300&h=300", "https://tse1.mm.bing.net/th?id=OIP.VifAL_fH73_XmvsJhNBXCAHaEv&pid=Api&P=0&w=251&h=161", "https://media.istockphoto.com/photos/smiling-grandmother-hugging-grandson-on-bicycle-in-park-picture-id103332452?k=6&m=103332452&s=612x612&w=0&h=52bdHxDFvQncHCA8PIXiQLjQDQvrOG97SpHohxhh__s=", "https://thumbs.dreamstime.com/b/portrait-grandfather-grandson-football-54990582.jpg"];
var names = ["Larisa", "Kian", "Dameki", "Deibormi", "Sameki", "Risaika", "Meridia", "Oroilangrai"];
var i = 0;

function change_img() {
    var no_of_family_mem = 7;
    i++;
    if (i > no_of_family_mem) {
        i = 0;
    }
    var updated_images = images[i];
    var updated_names = names[i];
    document.getElementById("family").src = updated_images;
    document.getElementById("family_name").innerHTML = updated_names;
}