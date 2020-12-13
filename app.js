// /* Start of JS file for Budget*/
// // import { AlertController } from '@ionic/angular';
// const reasonInput = document.querySelector("#input-reason");
// const amountInput = document.querySelector("#input-amount");
// const cancelbtn = document.querySelector("#btn-cancel");
// const confirmBtn = document.querySelector("#btn-confirm");


// confirmBtn.addEventListener('click', ()=>{
//     const enteredReason = reasonInput.value;
//     const enteredAmount = amountInput.value;

//     console.log(enteredReason, enteredAmount);    
// });;//end event listener (confirmBtn)

// cancelbtn.addEventListener('click', ()=>{
//     reasonInput.value =" ";
//     amountInput.value =" ";

// });;

// export class AlertExample {

//     constructor(public alertController: AlertController) {}
  
//     async presentAlert() {
//       const alert = await this.alertController.create({
//         cssClass: 'my-custom-class',
//         header: 'Alert',
//         subHeader: 'Subtitle',
//         message: 'This is an alert message.',
//         buttons: ['OK']
//       });
  
//       await alert.present();
//     }

// function presentAlert() {
//     const alert = document.createElement('ion-alert');
//     alert.cssClass = 'my-custom-class';
//     alert.header = 'Alert';
//     alert.subHeader = 'Subtitle';
//     alert.message = 'This is an alert message.';
//     alert.buttons = ['OK'];
  
//     document.body.appendChild(alert);
//     return alert.present();
//   }------------------------------------------------------------------------------
const AddButton = document.getElementById('btn-confirm');
const AddButton2 = document.getElementById('btn-confirm-2');
const ClearBtn = document.getElementById('btn-cancel');
const ClearBtn2 = document.getElementById('btn-cancel-2');
var inputItemE = document.getElementById('input-item-e');
var inputAmountE = document.getElementById('input-amount-e');
var inputImageE = document.getElementById('input-image-e');
var inputWishlist = document.getElementById('input-wishlist');

function toggleReorder() {
    const reorderGroup = document.getElementById('reorder');
    reorderGroup.disabled = !reorderGroup.disabled;
    reorderGroup.addEventListener('ionItemReorder', ({detail}) => {
      detail.complete(true);
    });
  }

AddButton.addEventListener("click", async function(){
    console.log(inputItemE.value, "$" + inputAmountE.value);
    
var eItem = inputItemE.value;
var eAmount = inputAmountE.value;
var eImage = inputImageE.value;

if (eItem == 0)
{ 
//    alert("Please enter required fields");  	
const alert = await alertController.create({
    header: 'Please Enter Required Field',
    message: 'Please fill in item name',
    buttons: ['Ok']
  });

  await alert.present();
   return false; 
}else{
    
    $("#e-card-content").prepend(
        `
        <ion-reorder>
        <ion-card>
        <ion-card-header>
        <img src="${eImage}" />
          <ion-card-subtitle>Entertainment Expense</ion-card-subtitle>
          <ion-card-title>${eItem}</ion-card-title>
          <ion-card-title>$${eAmount}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
        </ion-card-content>
        <ion-card>
        </ion-reorder>
        `
    )
    return true; 
}   
});
//Clear Buttons
ClearBtn.addEventListener("click", function(){
    inputItemE.value = "";
    inputAmountE.value = "";
    inputImageE.value = "";
});


//---------------------------------------------------------------------------------------------------------
AddButton2.addEventListener("click", async function(){
    console.log(inputWishlist.value);
    
var wishlist_item = inputWishlist.value;

if (inputWishlist.value == 0)
{ 
//    alert("Please enter required fields");  	
const alert = await alertController.create({
    header: 'Please Enter Required Field',
    message: 'Please fill in item name',
    buttons: ['Ok']
  });

  await alert.present();
   return false; 
}else{
    
    $("#wishlist-checkbox").prepend(
        `
        <ion-item>
            <ion-label>${wishlist_item}</ion-label>
            <ion-checkbox color="danger" checked slot="start"></ion-checkbox>
            <ion-reorder slot="start">
            <ion-icon name="repeat"></ion-icon>
          </ion-reorder>
          </ion-item>`
    )
    return true; 
}   
});
ClearBtn2.addEventListener("click", function(){
    inputWishlist.value = "";
});
//Menu---------------------------------------------------------------------------
async function openMenu() {
    await menuController.open();
}
//Profile Page----------------------------------------------------------------------------
const SaveButton = document.getElementById('btn-save');
const ResetButton = document.getElementById('btn-reset');
var inputImageP = document.getElementById('input-image-p');
var inputNameP = document.getElementById('input-name-p');
var inputAgeP = document.getElementById('input-age-p');
var gender = document.getElementById('gender');
var notification = document.getElementById('notifications');
var birthYear = document.getElementById('birthYear');
var birthMonth = document.getElementById('birthMonth');


SaveButton.addEventListener("click", async function update(){
    
var pImage = inputImageP.value;
var pName = inputNameP.value;
var pAge = inputAgeP.value;
var vGender = gender.value;
var vNoti = notification.value;
var vBirthYear = birthYear.value;
var vBirthMonth = birthMonth.value;

if (pName == 0)
{ 
//    alert("Please enter required fields");  	
const alert = await alertController.create({
    header: 'Please Enter Required Field',
    message: 'Please fill in your name',
    buttons: ['Ok']
  });

  await alert.present();
   return false; 
}else{
    
    // $("#profileEdit").prepend(
        // `
        // <ion-title>.</ion-title><br>
        //       <ion-item >
        //         <ion-avatar slot="start">
        //           <img
        //             src="${pImage}">
        //         </ion-avatar>
        //         <ion-label>${pName}
        //           <p>${pAge} year old</p>
        //         </ion-label>
        //       </ion-item>
        //       <div class="ion-margin ion-margin-vertical ion-text-left">
        //         <br>
        //         <p>Gender: ${vGender}</p>
        //         <p>Notifications: ${vNoti}</p>
        //         <p>Birth Year: ${vBirthYear}</p>
        //         <p>Birth Month: ${vBirthMonth}</p>
        //       </div>`
    var first = document.getElementById("profileEdit").innerHTML; 
    var second = first.replace("Update Profile at top",         
    `
    <ion-title>.</ion-title><br>
          <ion-item >
            <ion-avatar slot="start">
              <img
                src="${pImage}">
            </ion-avatar>
            <ion-label>${pName}
              <p>${pAge} year old</p>
            </ion-label>
          </ion-item>
          <div class="ion-margin ion-margin-vertical ion-text-left">
            <br>
            <p>Gender: ${vGender}</p>
            <p>Notifications: ${vNoti}</p>
            <p>Birth Year: ${vBirthYear}</p>
            <p>Birth Month: ${vBirthMonth}</p>
          </div>`);
    document.getElementById("profileEdit").innerHTML = second;
    
    return true; 
}   
});

ResetButton.addEventListener("click", function reset(){
var pImage = inputImageP.value;
var pName = inputNameP.value;
var pAge = inputAgeP.value;
var vGender = gender.value;
var vNoti = notification.value;
var vBirthYear = birthYear.value;
var vBirthMonth = birthMonth.value;

    var old = document.getElementById("profileEdit").innerHTML; 
    var New = old.replace(`
    <ion-title>.</ion-title><br>
          <ion-item >
            <ion-avatar slot="start">
              <img
                src="${pImage}">
            </ion-avatar>
            <ion-label>${pName}
              <p>${pAge} year old</p>
            </ion-label>
          </ion-item>
          <div class="ion-margin ion-margin-vertical ion-text-left">
            <br>
            <p>Gender: ${vGender}</p>
            <p>Notifications: ${vNoti}</p>
            <p>Birth Year: ${vBirthYear}</p>
            <p>Birth Month: ${vBirthMonth}</p>
          </div>`,"Update Profile at top");
    document.getElementById("profileEdit").innerHTML = New;
    
});
