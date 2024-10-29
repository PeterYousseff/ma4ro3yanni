const firebaseConfig = {
  apiKey: "AIzaSyAOfGQpa0Jd4RhSehHwpsKBSSc4maBE050",
  authDomain: "windy-raceway-435310-t7.firebaseapp.com",
  databaseURL: "https://windy-raceway-435310-t7-default-rtdb.firebaseio.com",
  projectId: "windy-raceway-435310-t7",
  storageBucket: "windy-raceway-435310-t7.appspot.com",
  messagingSenderId: "870157095764",
  appId: "1:870157095764:web:2c5a7cdcbd6d52bcdbaec1",
  measurementId: "G-B87PPFPCC2",
};

firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("mashro3YanniJoinUs");

document.getElementById("mashro3YanniJoinUs").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var date = getElementVal("date-picker");
  var address = getElementVal("address"); 
  var education = getElementVal("education"); 
  var phoneInput = getElementVal("phoneInput"); 
  var voiceType = getElementVal("voiceType"); 
  var HaveYouPreviouslySungInAChoir = getElementVal("HaveYouPreviouslySungInAChoir"); 
  var HaveYouTakenOrAreYouTakingAnyVoiceLessons = getElementVal("HaveYouTakenOrAreYouTakingAnyVoiceLessons"); 
  var DoYouPlayAnyInstruments = getElementVal("DoYouPlayAnyInstruments"); 

  saveMessage(name, email,date,address,education,phoneInput,voiceType,HaveYouPreviouslySungInAChoir,HaveYouTakenOrAreYouTakingAnyVoiceLessons,DoYouPlayAnyInstruments);
}

const saveMessage = (name, email,date,address,education,phoneInput,voiceType,HaveYouPreviouslySungInAChoir,HaveYouTakenOrAreYouTakingAnyVoiceLessons,DoYouPlayAnyInstruments) => {
  var newContactForm = contactFormDB.push();

  // Get formatted date and time
  var timestamp = formatDateTime(new Date());

  newContactForm.set({
    name: name,
    email: email,
    date: date, 
    address:address,
    education:education,
    phoneInput:phoneInput,
    voiceType:voiceType,
    HaveYouPreviouslySungInAChoir:HaveYouPreviouslySungInAChoir,
    HaveYouTakenOrAreYouTakingAnyVoiceLessons:HaveYouTakenOrAreYouTakingAnyVoiceLessons,
    DoYouPlayAnyInstruments:DoYouPlayAnyInstruments,
    timestamp:timestamp,
  })
  .then(() => {
    // Show success alert
    alert("Message sent successfully!");
  })
  .catch((error) => {
    // Show error alert
    alert("Error sending message: " + error.message);
  });
};

const formatDateTime = (date) => {
  // Format date
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();

  // Format time
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const period = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12 || 12; // Adjust hours for 12-hour format

  return `date: ${day}/${month}/${year}, time: ${hours}:${minutes} ${period}`;
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
