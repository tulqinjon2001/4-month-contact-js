let elContactForm = $(".js-contact-form");
let elContactName = $(".js-contact-name", elContactForm);
let elContactSurname = $(".js-contact-surname", elContactForm);
let elContactRelationship = $(".js-contact-relationship", elContactForm);
let elContactTelephone = $(".js-contact-telephone", elContactForm);

let elContactList = $(".js-contacts-list");

let contactsList = [];

let renderContacts = function() {
  elContactList.innerHTML = "";

  for (let i = 0; i < contactsList.length; i++) {
    let elNewFullname = document.createElement("p");
    elNewFullname.textContent = `${contactsList[i].name} ${contactsList[i].surname}`;
    elNewFullname.className = "fw-bold m-0";

    let elNewRelationShip = document.createElement("p");
    elNewRelationShip.textContent = `${contactsList[i].relationship}`;
    elNewRelationShip.className = "small m-0 opacity-75";

    let elNewTelephone = document.createElement("a");
    elNewTelephone.className = "text-decoration-none";
    elNewTelephone.textContent = `${contactsList[i].telephone}`;
    elNewTelephone.setAttribute("href", `tel:${contactsList[i].telephone}`);

    let deleteBtn = document.createElement("span");
    deleteBtn.style.imageRendering = "https://cdn-icons-png.flaticon.com/512/484/484611.png";

    let elItem = document.createElement("li");
    elItem.className = "list-group-item w-75 my-1 rounded-2";
    elItem.append(elNewFullname, elNewRelationShip, elNewTelephone, deleteBtn);
    elContactList.appendChild(elItem);
  }
}

elContactForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  let contactName = elContactName.value.trim();
  let contactSurname = elContactSurname.value.trim();
  let contactRelationship = elContactRelationship.value.trim();
  let contactTelephone = elContactTelephone.value.trim();

  // contactsList.push({
  //   name: contactName,
  //   surname: contactSurname,
  //   relationship: contactRelationship,
  //   telephone: contactTelephone,
  // })

  let contactPerson = {
    name: contactName,
    surname: contactSurname,
    relationship: contactRelationship,
    telephone: contactTelephone,
  }

  contactsList.push(contactPerson);

  renderContacts();
})