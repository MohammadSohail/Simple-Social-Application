window.addEventListener('load',function() {
    
    function search(){
        console.log('Seaching!');
    }
    var searchBtn = this.document.getElementById('searchBtn');
    searchBtn.addEventListener('click', search);

});
