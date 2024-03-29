var users = [
    {
        name: 'Lucy',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar1.png'        
    },
    {
        name: 'Betty',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar2.png'
    },
    {
        name: 'Ronald',
        gender: 'M',
        hobby: 'music',
        avatar: 'avatar3.png'
    },
    {
        name: 'Christopher',
        gender: 'M',
        hobby: 'sports',
        avatar: 'avatar4.png'
    },
    {
        name: 'Ximena',
        gender: 'F',
        hobby: 'reading',
        avatar: 'avatar5.png'
    },
    {
        name: 'Paul',
        gender: 'M',
        hobby: 'shopping',
        avatar: 'avatar6.png'
    },
    {
        name: 'Charlie',
        gender: 'M',
        hobby: 'pets',
        avatar: 'avatar7.png'
    },
];



window.addEventListener('load',function() {
    var result = this.document.getElementById('results');
    function search(){
        //get hobby
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;

        //get gender
        var genderField = document.getElementById('gender');
        var s = genderField.selectedIndex;
        var gender = genderField.options[s].value;
        
        var resultsHtml = '';
        var usersLength = users.length;

        function task(a,b,c){
            var res = '';
            res += '<div class="person-row">\
            <img src="images/' + a + '" />\
            <div class="person-info">\
            <div>' + b + '</div>\
            <div>' + c + '</div></div>\
             <button>Add as friend</button></div>'; 

             return res;
        }

        for(var i = 0; i < usersLength; i++) {   
            // check gender
            if (gender == 'A' || gender == users[i].gender) {
                //check hobby
                if(hobby == '' || hobby == users[i].hobby){

                resultsHtml += task(users[i].avatar, users[i].name, users[i].hobby); 
                
                }
            }

        }
        
        results.innerHTML = resultsHtml;

    }
    var searchBtn = this.document.getElementById('searchBtn');
    searchBtn.addEventListener('click', search);

});
