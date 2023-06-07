let rows = 1;
const memorySelect = document.getElementById("Memory");
const storageSelect = document.getElementById("Storage");
const priceElement = document.querySelector(".each.price");
const totalPriceElement = document.getElementById("totalPrice");
const conversionRate = 118.5; // Conversion rate from USD to Nepali Rupees
const currencySelect = document.getElementById("currency");
memorySelect.addEventListener("change", calculateTotalPrice);
storageSelect.addEventListener("change", calculateTotalPrice);
const addTable = document.getElementsByClassName("Add");
const service = document.getElementById("service");
const remove = document.getElementsByClassName("Delete");
console.log(service);
const number = document.getElementById("number");
function calculateTotalPrice() {
  const selectedMemory = parseInt(memorySelect.value);
  const selectedStorage = parseInt(storageSelect.value);
  const selectedService = parseInt(service.value);
  const selectedNumber = parseInt(number.value);
  const pricePerUnit = parseFloat(priceElement.innerText);

  const totalPrice =
    pricePerUnit *
    selectedMemory *
    selectedStorage *
    selectedService *
    selectedNumber;

  const totalPriceUSD = totalPrice.toFixed(2);
  const totalPriceNPR = (totalPrice * conversionRate).toFixed(2);
  currencySelect.innerText = `USD: ${totalPriceUSD} | Nepali: ${totalPriceNPR}`;
}



remove[0].addEventListener("click", () => {
  rows=rows-1;
  console.log(rows);
  const table = document.getElementById("rows").parentElement;
   table.removeChild(table.lastChild);
});



addTable[0].addEventListener("click", () => {
  rows=rows+1;
  console.log(rows)
  const table = document.getElementById("rows").parentElement;
  const newRow = document.createElement("tr");
  newRow.id = "rows";
  newRow.innerHTML = ` <td>
    <select name="service" id="service">
      <option value="0" selected>Select an option</option>
      <option value="1">VPS Based server Solution -1</option>
      <option value="1">VPS Based server Solution -2</option>
      <option value="1">VPS Based server Solution -3</option>
    </select>
  </td>
  <td>
    <select name="number" id="number">
      <option value="1" selected>SIN</option>
      <option value="1">Nutanx HCI - NX8155N-G8</option>
      <option value="1">Nutanx HCI - NX8155N-G8</option>
      <option value="1">Nutanx HCI - NX8155N-G8</option>
    </select>
  </td>
  <td>
    <select name="Memory" id="Memory">
      <option value="0" selected>Select Total Memory</option>
      <option value="2">2</option>
      <option value="4">4</option>
      <option value="6">6</option>
    </select>
  </td>
  <td>
    <select class="Storage" id="Storage">
      <option value="1" selected>Storage</option>
      <option value="25">25</option>
      <option value="50">50</option>
      <option value="80">80</option>
    </select>
  </td>
  <td>
    <div class="each price">233$</div>
  </td>
  <td id="currency">USD: Nepali</td>`;

  table.appendChild(newRow);
  calculateTotalPrice();
});

