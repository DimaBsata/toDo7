// Initialize your app
var myApp = new Framework7({
  modalTitle: 'ToDo7',
  template7Pages:true,
  template7Data: {
  'page:index': {
            'notes': [{title:'tit',description:'desc'}]
        }
      }
});


// Export selectors engine
var $$ = Dom7;
// Add views
var mainView = myApp.addView('.view-main', {
  // Because we use fixed-through navbar we can enable dynamic navbar
  dynamicNavbar: true
});

$$('.popup').on('opened', function () {
  $$('.addTask').on('click',function(){
  	notes.push(myApp.formToJSON('#my-form'));
    myApp.closeModal('.popup');showNotes();
    alert(JSON.stringify(notes));
  });
});

myApp.onPageInit('index', function (page) {
  showNotes();
});

function showNotes()
{
	var NotesListTemplate = $$('script#NotesListTemplate').html();
  var compiledNotesListTemplate = Template7.compile(NotesListTemplate);
  $$('#notesList').html(compiledNotesListTemplate({notes:JSON.parse(notes)}));    
}

/************* Initial App ***************/
/***********/ myApp.init(); /*************/
/*****************************************/