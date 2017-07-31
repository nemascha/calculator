document.addEventListener('DOMContentLoaded', function () {

	var mainButton = document.querySelector('.main-button');
	mainButton.addEventListener('click', function(){
			
        switch(event.target.dataset['type']) {

            case 'number':
                addNumber(event.target.dataset['value']);
                break;
            case 'divide':
                break;
            case 'multiply':
                break;
            case 'minus':
                break;
            case 'plus':
                break;
            case 'equal':
                break;
        }

	
})

});


