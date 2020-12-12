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
//   }
const AddButton = document.getElementById('btn-confirm');

function GetAddedResults(){
    let n = document.getElementById('input-amount').value;
    console.log("n")
}

AddButton.addEventListener("click", GetAddedResults);