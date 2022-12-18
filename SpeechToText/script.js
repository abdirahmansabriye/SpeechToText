var result = document.getElementById('text');
  
function speechToText (start) {

	if('webkitSpeechRecognition' in window) {
		var speechRecognizer = new webkitSpeechRecognition();
			speechRecognizer.continuous = true;
			speechRecognizer.interimResults = true;
			speechRecognizer.lang = 'en-GB';
			speechRecognizer.start();

        if(start){
            var finalTranscripts = '';

            speechRecognizer.onresult = function(event) {
                    var interimTranscripts = '';
                    for(var i = event.resultIndex; i < event.results.length; i++){
                        var transcript = event.results[i][0].transcript;
                        transcript.replace("\n", "<br>"); //make a new line
                        if(event.results[i].isFinal) {
                            finalTranscripts += transcript;
                        }else{
                            interimTranscripts += transcript;
                        }
                    }
                    result.innerHTML = finalTranscripts + '<span style="color: #999">' + interimTranscripts + '</span>';
            };
            speechRecognizer.onerror = function (event) {
                console.log(event);
            };
        }
        else{
            speechRecognizer.stop();
            alert("The speech to text recognition has stopped!")
        }
	}else {
			result.innerHTML = 'Your browser is not supported. Please download Google chrome or Update your Google chrome!!';
	}	
}
function getDate() {
    var today = new Date();
    var day = String(today.getDate()).padStart(2, '0');
    var month = String(today.getMonth() + 1).padStart(2, '0');
    var year = today.getFullYear();
    document.getElementById("date").innerHTML = day + '/' + month + '/' + year;
}