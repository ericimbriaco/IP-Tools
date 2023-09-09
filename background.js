function notifications(){
	chrome.notifications.create(
	  {
		title: 'test',
		message: 'blyat',
	  }
	)
  }