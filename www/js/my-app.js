var myApp = new Framework7({
  modalTitle: 'Food Shop System',
  material: true,
  template7Pages: true,
  init:false,
  swipePanel: 'right'
});
 
var $$ = Dom7;

// Add and init View
var mainView = myApp.addView('.view-main');

/************* Main Page Init ***************/
myApp.onPageInit('main', function (page) {
  mainView.router.loadPage('login-screen.html');
});


/************* LogIn Page Init ***************/
myApp.onPageInit('login-screen', function (page) {
  var pageContainer = $$(page.container);
  pageContainer.find('.list-button').on('click', function () {
    var username = pageContainer.find('input[name="username"]').val();
    var password = pageContainer.find('input[name="password"]').val();
    if (username=="user" && password=="user")
    {
      showFoodMenuList();
      showPanelMenuList();
    }
    else
      myApp.alert("Wrong username or password");
  });
});   


/************* Food Menu List ***************/
function showFoodMenuList()
{
  var foods = JSON.parse(
'[{"foodName":"Humburger","Catalog":"Sandwich","Contents":"Potatoes, Meet, Tomato","Price":"15","image":"img/1.jpg"},'+
'{"foodName":"Ice Cream", "Catalog":"Sweets","Contents":"Milk, Chocalete","Price":"5","image":"img/2.jpg"},'+
'{"foodName":"Cola","Catalog":"Drinks","Contents":"Sugar, Water, Salt","Price":"2","image":"img/3.jpg"}]');
  mainView.router.load({
                url:'foodMenu.html',
                context: {'foods':foods}
            });
}  

/************* Panel Menu List ***************/
function showPanelMenuList()
{
  var data ='[{"name":"food1","id":"1"},{"name":"food2","id":"2"},{"name":"food3","id":"3"}]';
  var menuListTemplate = $$('script#menuListTemplate').html();
  var compiledmenuListTemplate = Template7.compile(menuListTemplate);
  $$('#menu-list').html(compiledmenuListTemplate({menuList: JSON.parse(data)}));    
}

/************* Initial App ***************/
/***********/ myApp.init(); /*************/
/*****************************************/