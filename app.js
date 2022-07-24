// https://calculator.swiftutors.com/return-on-net-assets-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const returnOnNetAssetsRadio = document.getElementById('returnOnNetAssetsRadio');
const netIncomeRadio = document.getElementById('netIncomeRadio');
const fixedAssetsRadio = document.getElementById('fixedAssetsRadio');
const workingCapitalRadio = document.getElementById('workingCapitalRadio');

let returnOnNetAssets;
let netIncome = v1;
let fixedAssets = v2;
let workingCapital = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

returnOnNetAssetsRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Income';
  variable2.textContent = 'Fixed Assets';
  variable3.textContent = 'Working Capital';
  netIncome = v1;
  fixedAssets = v2;
  workingCapital = v3;
});

netIncomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Return on Net Assets';
  variable2.textContent = 'Fixed Assets';
  variable3.textContent = 'Working Capital';
  returnOnNetAssets = v1;
  fixedAssets = v2;
  workingCapital = v3;
});

fixedAssetsRadio.addEventListener('click', function() {
  variable1.textContent = 'Return on Net Assets';
  variable2.textContent = 'Net Income';
  variable3.textContent = 'Working Capital';
  returnOnNetAssets = v1;
  netIncome = v2;
  workingCapital = v3;
});

workingCapitalRadio.addEventListener('click', function() {
  variable1.textContent = 'Return on Net Assets';
  variable2.textContent = 'Net Income';
  variable3.textContent = 'Fixed Assets';
  returnOnNetAssets = v1;
  netIncome = v2;
  fixedAssets = v3;
});


btn.addEventListener('click', function() {
  
  if(returnOnNetAssetsRadio.checked)
    result.textContent = `Return on Net Assets = ${computeReturnOnNetAssets().toFixed(2)}%`;

  else if(netIncomeRadio.checked)
    result.textContent = `Net Income = ${computeNetIncome().toFixed(2)}`;

  else if(fixedAssetsRadio.checked)
    result.textContent = `Fixed Assets = ${computeFixedAssets().toFixed(2)}`;

  else if(workingCapitalRadio.checked)
    result.textContent = `Working Capital = ${computeWorkingCapital().toFixed(2)}`;
})

// calculation

function computeReturnOnNetAssets() {
  return (Number(netIncome.value) / (Number(fixedAssets.value) + Number(workingCapital.value))) * 100;
}

function computeNetIncome() {
  return (Number(returnOnNetAssets.value) / 100) * (Number(fixedAssets.value) + Number(workingCapital.value))
}

function computeFixedAssets() {
  return (Number(netIncome.value) / (Number(returnOnNetAssets.value) / 100)) - Number(workingCapital.value)
}

function computeWorkingCapital() {
  return (Number(netIncome.value) / (Number(returnOnNetAssets.value) / 100)) - Number(fixedAssets.value)
}