function getyear() {
    var year=new Date().getFullYear();
    document.getElementById("current_year").innerHTML=year;
}
function getUpdateTime() {
    var update_time=new Date(document.lastModified);
    document.getElementById("update_time").innerHTML=update_time;
}
$(document).ready(function () {
    getyear();
    getUpdateTime();
});
