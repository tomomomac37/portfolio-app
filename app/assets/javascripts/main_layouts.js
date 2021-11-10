document.addEventListener('DOMContentLoaded', function() {
    // var modeSwitch = document.querySelector('.mode-switch');
    // modeSwitch.addEventListener('click', function() {
    //     document.documentElement.classList.toggle('dark');
    //     modeSwitch.classList.toggle('active');
    // });

    var listView = document.querySelector('.list-view');
    var gridView = document.querySelector('.grid-view');
    var projectsList = document.querySelector('.project-boxes');
    var listItems = document.getElementsByClassName('project-btn-more');

    listView.addEventListener('click', function() {
        gridView.classList.remove('active');
        listView.classList.add('active');
        projectsList.classList.remove('jsGridView');
        projectsList.classList.add('jsListView');
    });

    gridView.addEventListener('click', function() {
        gridView.classList.add('active');
        listView.classList.remove('active');
        projectsList.classList.remove('jsListView');
        projectsList.classList.add('jsGridView');
    });






    // document.querySelector('.messages-btn').addEventListener('click', function() {
    //     document.querySelector('.messages-section').classList.add('show');
    // });

    // document.querySelector('.messages-close').addEventListener('click', function() {
    //     document.querySelector('.messages-section').classList.remove('show');
    // });

    // 縦三点リーダクリック時アクション
    // var projectBtnMore = document.querySelector('.project-btn-more');
    // var verticalThreeReader = document.querySelector('.vertical-three-reader');

    // projectBtnMore.addEventListener('click', function() {
    //     // projectBtnMore.classList.add('verticalThreeReader');
    //     projectBtnMore.classList.toggle('is-show');
    //     verticalThreeReader.classList.toggle('is-show')
    // })

    //     document.querySelector(".vertical-three-reader").style.visibility ="hidden";

    //     function verticalThreeReader(){
    //     	const verticalThreeReader = document.querySelector(".vertical-three-reader");

    //     	if(verticalThreeReader.style.visibility=="visible"){
    //     		// hiddenで非表示
    //     		verticalThreeReader.style.visibility ="hidden";
    //     	}else{
    //     		// visibleで表示
    //     		verticalThreeReader.style.visibility ="visible";
    //     	}
    // }


});

function verticalThreeReader() {
    console.log('abc');
    const toggleMenu = ({ currentTarget }) => {
        const menu = currentTarget.querySelector('.vertical-three-reader');
        menu.style.visibility = menu.style.visibility !== 'hidden' ? 'hidden' : 'visible'
    }

    // document.querySelectorAll('.project-btn-more').forEach(btn => {
    //     console.log(btn);
    //     toggleMenu({ currentTarget: btn });
    //     btn.addEventListener('click', toggleMenu);
    // });

    var listItems = document.getElementsByClassName('project-btn-more');
    listItems = Array.prototype.slice.call(listItems, 0);
    console.log(listItems);

    listItems.forEach(function($listItem, i) {
        console.log('def');
        console.log(i);
        console.log($listItem);
        $listItem.addEventListener('click', function() {
            console.log('順番', i);
            const btn = document.getElementsByClassName('project-btn-more')[i];
            toggleMenu({ currentTarget: btn });
            btn.addEventListener('click', toggleMenu);
        });
    });


}