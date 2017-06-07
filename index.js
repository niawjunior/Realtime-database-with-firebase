var fireHeading = document.getElementById("fireHeading");

var firebaseHeadingRef = firebase.database().ref().child("Text");

firebaseHeadingRef.on('value',function(datasnapshot){
	fireHeading.innerText = datasnapshot.val();
});
function submitClick(){
	var firebaseRef = firebase.database().ref();
	firebaseRef.child("Text").set(document.getElementById("name").value);
}