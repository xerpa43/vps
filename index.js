let rows = 1;
let chooosenMemory = 0;
let chooosenStorage = 0;
let currencySelect = document.querySelectorAll(".currency");
let memorySelect = document.querySelectorAll(".Memory");
let priceElement = document.querySelector(".each.price");
let storageSelect = document.querySelectorAll(".Storage");
let service = document.querySelectorAll(".service");
let number = document.querySelectorAll(".number");
let jpt = document.querySelector(".total");
const conversionRate = 118.5; // Conversion rate from USD to Nepali Rupees

changedRow();

const addTable = document.getElementsByClassName("Add");
const remove = document.getElementsByClassName("Delete");
function calculateTotalPrice(row) {
  const selectedMemory = parseInt(memorySelect[row].value);
  const selectedStorage = parseInt(storageSelect[row].value);
  const selectedService = parseInt(service[row].value);
  const selectedNumber = parseInt(number[row].value);
  const pricePerUnit = parseFloat(priceElement.innerText);

  const totalPrice =
    pricePerUnit *
    selectedMemory *
    selectedStorage *
    selectedService *
    selectedNumber;
  // console.log(pricePerUnit, selectedMemory, selectedStorage, selectedService, selectedNumber);

  const totalPriceUSD = totalPrice.toFixed(2);
  const totalPriceNPR = (totalPrice * conversionRate).toFixed(2);
  currencySelect[
    row
  ].innerText = `USD: ${totalPriceUSD} | Nepali: ${totalPriceNPR}`;

  console.log(chooosenMemory + " ");

  jpt.innerHTML = `
    <table class="totalclasses">
      <tr>
        <th> </th>
        <th> </th> <th> </th> <th> </th> <th> </th>
        <th> </th>
      </tr>
      <tr>
        <td>Total Memory used</td>
        <td>Total Storage used</td>
        <td>Total Price:</td>
      </tr>
    </table>
  `;
}

remove[0].addEventListener("click", () => {
  if (rows >= 0) {
    rows--;
    const table = document.getElementById("rows").parentElement;
    table.removeChild(table.lastChild);
    checkForChanges();
  }
});

addTable[0].addEventListener("click", () => {
  rows = rows + 1;
  const table = document.getElementById("rows").parentElement;
  const newRow = document.createElement("tr");
  newRow.id = "rows";
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
  <td class="currency">USD: Nepali</td>`;

  table.appendChild(newRow);
  checkForChanges();
});

function checkForChanges() {
  currencySelect = document.querySelectorAll(".currency");
  memorySelect = document.querySelectorAll(".Memory");
  // priceElement = document.querySelectorAll(".each.price");
  storageSelect = document.querySelectorAll(".Storage");
  service = document.querySelectorAll(".service");
  number = document.querySelectorAll(".number");
  changedRow();
}
function changedRow() {
  for (let i = 0; i < memorySelect.length; i++) {
    memorySelect[i].addEventListener("change", () => {
      calculateTotalPrice(i);
    });
    storageSelect[i].addEventListener("change", () => {
      calculateTotalPrice(i);
    });
    service[i].addEventListener("change", () => {
      calculateTotalPrice(i);
    });
    number[i].addEventListener("change", () => {
      calculateTotalPrice(i);
    });
  }
}

console.log(chooosenMemory);
