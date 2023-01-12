//variable
const services = [
  {
    id: 1,
    title: "Domain Service",
    price: 15,
  },
  {
    id: 2,
    title: "Hosting Service",
    price: 30,
  },
  {
    id: 3,
    title: "Web Design Service",
    price: 150,
  },
  {
    id: 4,
    title: "Maintenance Service",
    price: 100,
  },
];

// selector
const invoiceForm = document.querySelector("#invoiceForm");
const selectService = document.querySelector("#selectService");
const quantity = document.querySelector("#quantity");
const lists = document.querySelector("#lists");
const subTotal = document.querySelector("#subTotal");
const tax = document.querySelector("#tax");
const total = document.querySelector("#total");

//function
const createTr = (service, quantity) => {
  const tr = document.createElement("tr");
  tr.classList.add("list");
  const total = service.price * quantity;
  tr.innerHTML = `
    <td>${service.title}</td>
    <td class=" text-end">${quantity}</td>
    <td class=" text-end">${service.price}</td>
    <td class=" text-end list-total">${total}</td>
  `;
  return tr;
};

const findTax = (amount, percentage = 5) => {
  return amount * (percentage / 100);
};

const findTotal = () => {
  const listTotal = document.querySelectorAll(".list-total");
  let subTotal = [...document.querySelectorAll(".list-total")].reduce(
    (pv, cv) => pv + parseFloat(cv.innerText),
    0
  );

  //   listTotal.forEach((el) => (subTotal += parseFloat(el.innerText)));
  console.log(subTotal);
};

// procress ( tasks )
// service option loop
services.forEach((service) =>
  selectService.append(new Option(service.title, service.id))
);
// data collect from form
invoiceForm.addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log(
  //     selectService.value,
  //     selectService.options[selectService.selectedIndex].innerText,
  //     quantity.valueAsNumber
  //   );

  //   console.log(
  //     selectService.value,
  //     quantity.valueAsNumber,
  //     services.find((service) => service.id == selectService.value)
  //   );

  const selectedService = services.find(
    (service) => service.id == selectService.value
  );

  lists.append(createTr(selectedService, quantity.valueAsNumber));

  findTotal();

  invoiceForm.reset();
});
