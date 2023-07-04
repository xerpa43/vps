let rows = 1;
var theTotalUSD = 0;
var theTotalNPR = 0;
let chooosenMemory = 0;
let chooosenStorage = 0;
let currencySelect = document.querySelectorAll(".currency");
let memorySelect = document.querySelectorAll(".Memory");
let priceElement = document.querySelector(".each.price");
let storageSelect = document.querySelectorAll(".Storage");
let service = document.querySelectorAll(".service");
let number = document.querySelectorAll(".number");
let jpt = document.querySelector(".total");
const conversionRate = 130; // Conversion rate from USD to Nepali Rupees

changedRow();

const addTable = document.getElementsByClassName("Add");
const remove = document.getElementsByClassName("Delete");

function calculateTotalPrice(row) {
  const selectedMemory = parseInt(memorySelect[row].value);
  const selectedStorage = parseInt(storageSelect[row].value);
  const selectedService = parseInt(service[row].value);
  const selectedNumber = parseInt(number[row].value);
  const pricePerUnit = parseInt(priceElement.innerText);

  const totalPrice =
    pricePerUnit *
    selectedMemory *
    selectedStorage *
    selectedService *
    selectedNumber;

  const totalPriceUSD = totalPrice.toFixed(2);
  const totalPriceNPR = (totalPrice * conversionRate).toFixed(2);
  currencySelect[
    row
  ].innerText = `$ ${totalPriceUSD} Rs ${totalPriceNPR}`;
  // totalControl(row);
  // theTotalUSD = totalPriceUSD + theTotalUSD;
  // theTotalNPR = theTotalNPR + totalPriceNPR;
}

remove[0].addEventListener("click", () => {
  if (rows >= 0) {
    rows--;
    const table = document.getElementById("rows").parentElement;
    table.removeChild(table.lastChild);
    checkForChanges();
    totalPrice();
  }
});

addTable[0].addEventListener("click", () => {
  rows = rows + 1;
  const table = document.getElementById("rows").parentElement;
  const newRow = document.createElement("tr");
  newRow.id = "rows";
  totalPrice();
  newRow.innerHTML = ` <td>
    <select class="service" id="service">
      <option value="0" selected>Select an option</option>
      <option value="1">VPS Based server Solution -1</option>
      <option value="1">VPS Based server Solution -2</option>
      <option value="1">VPS Based server Solution -3</option>
    </select>
  </td>
  <td>
    <select class="number" id="number">
      <option value="0" selected>SIN</option>
      <option value="1">Nutanx HCI - NX8155N-G8</option>
      <option value="1">Nutanx HCI - NX8155N-G8</option>
      <option value="1">Nutanx HCI - NX8155N-G8</option>
    </select>
  </td>
  <td>
    <select class="Memory" id="Memory">
      <option value="0" selected>Select Total Memory</option>
      <option value="2">2</option>
      <option value="4">4</option>
      <option value="6">6</option>
    </select>
  </td>
  <td>
    <select class="Storage" id="Storage">
      <option value="0" selected>Storage</option>
      <option value="25">25</option>
      <option value="50">50</option>
      <option value="80">80</option>
    </select>
  </td>
  <td>
    <div class="each price">233$</div>
  </td>
  <td class="currency">USD: 0.00 | Nepali: 0.00 </td>`;

  table.appendChild(newRow);
  checkForChanges();
});

function checkForChanges() {
  currencySelect = document.querySelectorAll(".currency");
  memorySelect = document.querySelectorAll(".Memory");
  storageSelect = document.querySelectorAll(".Storage");
  service = document.querySelectorAll(".service");
  number = document.querySelectorAll(".number");
  changedRow();
}
function changedRow() {
  for (let i = 0; i < memorySelect.length; i++) {
    memorySelect[i].addEventListener("change", () => {
      calculateTotalPrice(i);
      totalPrice();
    });
    storageSelect[i].addEventListener("change", () => {
      calculateTotalPrice(i);
      totalPrice();
    });
    service[i].addEventListener("change", () => {
      calculateTotalPrice(i);
    });
    number[i].addEventListener("change", () => {
      calculateTotalPrice(i);
    });
  }
}


function totalPrice() {
  let arrow;
  let usedMemory = 0;
  let usedStorage = 0;
  
  let totalUSD = 0;
  let totalNPR = 0;

  for (let i = 0; i < memorySelect.length; i++) {
    usedMemory = usedMemory + parseInt(memorySelect[i].value);
    usedStorage = usedStorage + parseInt(storageSelect[i].value);
    const separate = currencySelect[i].innerText.split(" ");
    const totalPriceUSD = parseFloat(separate[1]);
    const totalPriceNPR = parseFloat(separate[3]);

    totalUSD += totalPriceUSD;
    totalNPR += totalPriceNPR;
  }

  let allTotalUSD = totalUSD + theTotalUSD;
  console.log(allTotalUSD)
  let nepali = allTotalUSD * conversionRate;

  jpt.innerHTML = `
    <table class="totalclasses">
      <tr>
        <td>Total Memory used: ${usedMemory} </td>
        <td>Total Storage used: ${usedStorage} </td>
        <td color:blue>Total Price: $${
          allTotalUSD ? allTotalUSD.toFixed(2) : 0
        } |  Rs ${nepali.toFixed(2)}</td>
      </tr> 
    </table>

    
  `;
}



// function totalControl(theRow) {
//   for (let i = 0; i < rows; i++) {
//     console.log(i);
//     // console.log(currencySelect[i].innerHTML);
//   }
// }
