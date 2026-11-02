
const BAKERY_EMAIL = "orders@example.com"; // Replace before publishing.
const DELIVERY_FEE = 6;
const SUBURBS = ["Auldana","Beaumont","Burnside","Fullarton","Glen Osmond","Hazelwood Park","Highgate","Magill","Myrtle Bank","St Georges"];
const form = document.querySelector('#orderForm');
const suburb = document.querySelector('#suburb');
const dateInput = document.querySelector('#deliveryDate');
const totalEl = document.querySelector('#total');
const dialog = document.querySelector('#successDialog');

SUBURBS.forEach(name => suburb.add(new Option(name, name)));
const minDate = new Date(); minDate.setDate(minDate.getDate() + 2);
dateInput.min = minDate.toISOString().split('T')[0];

function calculateTotal(){
  const bread = form.querySelector('[name="bread"]:checked');
  const size = form.querySelector('#size option:checked');
  const extras = [...form.querySelectorAll('[name="extras"]:checked')];
  const total = Number(bread.dataset.price) + Number(size.dataset.add) + extras.reduce((n,x)=>n+Number(x.dataset.price),0) + DELIVERY_FEE;
  totalEl.textContent = new Intl.NumberFormat('en-AU',{style:'currency',currency:'AUD'}).format(total);
  return total;
}
form.addEventListener('change', calculateTotal); calculateTotal();

document.querySelectorAll('.choose').forEach(button => button.addEventListener('click', () => {
  const target = form.querySelector(`[name="bread"][value="${button.dataset.bread}"]`);
  target.checked = true; calculateTotal(); document.querySelector('#order').scrollIntoView();
}));

document.querySelector('.menu-button').addEventListener('click', e => {
  const nav = document.querySelector('nav'); nav.classList.toggle('open');
  e.currentTarget.setAttribute('aria-expanded', nav.classList.contains('open'));
});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('nav').classList.remove('open')));

form.addEventListener('submit', event => {
  event.preventDefault();
  if(!form.reportValidity()) return;
  const data = new FormData(form);
  const extras = data.getAll('extras').join(', ') || 'None';
  const total = calculateTotal().toFixed(2);
  const body = `New sourdough order request

Customer: ${data.get('name')}
Email: ${data.get('email')}
Address: ${data.get('address')}, ${data.get('suburb')} SA
Delivery date: ${data.get('date')}

Bread: ${data.get('bread')}
Size: ${data.get('size')}
Flour: ${data.get('flour')}
Extras: ${extras}
Notes: ${data.get('notes') || 'None'}

Estimated total: $${total} AUD

Please confirm availability and payment details.`;
  window.location.href = `mailto:${BAKERY_EMAIL}?subject=${encodeURIComponent('Sourdough order request – '+data.get('date'))}&body=${encodeURIComponent(body)}`;
  dialog.showModal();
});
document.querySelectorAll('.close-dialog').forEach(b=>b.addEventListener('click',()=>dialog.close()));
document.querySelector('#year').textContent = new Date().getFullYear();
