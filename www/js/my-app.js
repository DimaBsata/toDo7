// Initialize your app
var myApp = new Framework7({
  modalTitle: 'ToDo7',
  template7Pages:true,
  init:false
});

// Export selectors engine
var $$ = Dom7;
// Add views
var mainView = myApp.addView('.view-main', {
  // Because we use fixed-through navbar we can enable dynamic navbar
  dynamicNavbar: true
});

var notes =[];

/************** Index Page Init ****************/
myApp.onPageInit('index', function (page) {
  showNotes();
});

/********* PopUp Add Task Button Action *******/
$$('.addTask').on('click',function(){
	notes.push(myApp.formToJSON('#my-form'));
  showNotes();
  myApp.closeModal('.popup');
});

/***************** Delete Note ********************/
$$('#notesList').on('delete', '.swipeout', function () {
  index = $$(this).data('index');
  notes.splice(index,1);
  showNotes();
});

/***************** Display Notes In Template ******************/
function showNotes()
{
	var NotesListTemplate = $$('script#NotesListTemplate').html();
  var compiledNotesListTemplate = Template7.compile(NotesListTemplate);
  $$('#notesList').html(compiledNotesListTemplate(notes));
}

/************* Initial App ***************/
/***********/ myApp.init(); /*************/
/*****************************************/