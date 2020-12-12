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

AddButton.addEventListener("click", async function(){
    console.log(inputItemE.value, "$" + inputAmountE.value);
    
var eItem = inputItemE.value;
var eAmount = inputAmountE.value;
var eImage = inputImageE.value;

if (eItem == 0)
{ 
//    alert("Please enter required fields");  	
const alert = await alertController.create({
    header: 'Please Enter Required Field?',
    message: 'Please fill in item name',
    buttons: ['Ok']
  });

  await alert.present();
   return false; 
}else{
    
    $("#e-card-content").prepend(
        `
        
        <ion-card-header>
        <img src="${eImage}" />
          <ion-card-subtitle>Entertainment Expense</ion-card-subtitle>
          <ion-card-title>${eItem}</ion-card-title>
          <ion-card-title>$${eAmount}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
        </ion-card-content>`
    )
    return true; 
}   
});
//Clear Buttons
ClearBtn.addEventListener("click", function(){
    eItem = "";
    eAmount = "";
    eImage = "";
});


//---------------------------------------------------------------------------------------------------------
AddButton2.addEventListener("click", async function(){
    console.log(inputWishlist.value);
    
var wishlist_item = inputWishlist.value;

if (inputWishlist.value == 0)
{ 
//    alert("Please enter required fields");  	
const alert = await alertController.create({
    header: 'Please Enter Required Field?',
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
          </ion-item>`
    )
    return true; 
}   
});
ClearBtn2.addEventListener("click", function(){
    wishlist_item = "";
});
// //Popover---------------------------------------------------------------------------------
// let currentPopover = null;

// const buttons = document.querySelectorAll('ion-button');
// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', handleButtonClick);
// }

// async function handleButtonClick(ev) {
//   popover = await popoverController.create({
//     component: 'popover-example-page',
//     event: ev,
//     translucent: true
//   });
//   currentPopover = popover;
//   return popover.present();
// }

// function dismissPopover() {
//   if (currentPopover) {
//     currentPopover.dismiss().then(() => { currentPopover = null; });
//   }
// }

// customElements.define('popover-example-page', class ModalContent extends HTMLElement {
//   connectedCallback() {
//     this.innerHTML = `
    
//     <ion-card-item>
                      
//     <ion-item>
//         <ion-label position="floating">Item Name</ion-label>
//         <ion-input id="input-item-e" type="text" placeholder="What did you buy?"></ion-input>
//     </ion-item>

//     <ion-item>
//         <ion-label position="floating">Total Amount</ion-label>
//         <ion-input id="input-amount-e" type="number" placeholder="Price?"></ion-input>
//     </ion-item>

//     <div class="ion-margin ion-margin-vertical ion-text-right">
//         <ion-button fill="outline" color="danger" id="btn-cancel">
//             <ion-icon name="close"></ion-icon>
//             Clear
//         </ion-button>
//         <ion-button id="btn-confirm">Add On</ion-button>
//     </div>
// </ion-card-item> 
//     `;
// const AddButton = document.getElementById('btn-confirm');
// const ClearBtn = document.getElementById('btn-cancel');
// var inputItemE = document.getElementById('input-item-e');
// var inputAmountE = document.getElementById('input-amount-e');
// $(AddButton).on("click", "btn-confirm", function(){
//     console.log(inputItemE.value, "$" + inputAmountE.value);
    
//     var eItem = inputItemE.value;
//     var eAmount = inputAmountE.value;
    
//         $("#e-card-content").prepend(
//             `
            
//             <ion-card-header>
//               <ion-card-subtitle>Entertainment Expense</ion-card-subtitle>
//               <ion-card-title>${eItem},${eAmount}</ion-card-title>
//             </ion-card-header>
//             <ion-card-content>
//               Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
//             </ion-card-content>`
//         )});
    
//     ClearBtn.addEventListener("click", function(){
//         inputItemE.value = "";
//         inputAmountE.value = "";
// });
// // AddButton.addEventListener("click", function(){

// }});
