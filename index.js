
document.getElementById('result').classList.add('hide')
document.getElementById('copy').classList.add('hide')



function speakNow(){
   let action =document.getElementById('action')
   action.innerHTML = 'loading.....'
   let result = document.getElementById('result')
   let toCopy = document.getElementById('text-to-copy')
   let copy = document.getElementById('copy')

   let voiceDetect = new webkitSpeechRecognition()

   voiceDetect.onstart = () => {
       action.innerHTML = 'Listening'
   }
   voiceDetect.onresult = (e) => {
       let transcript = e.results[0][0].transcript
       action.innerHTML = 'Done'
       result.classList.remove('hide')
       copy.classList.remove('hide')
       result.innerHTML = transcript
       toCopy.value = result.innerHTML
   }
   voiceDetect.start()

}

function copyText() {
   let copy = document.getElementById('text-to-copy')
   copy.select()
   document.execCommand('copy')
   alert('text copied successfully')
}


document.getElementById('speak-btn').onclick = speakNow
document.getElementById('copy').onclick = copyText