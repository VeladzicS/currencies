fetch("exchangerates.json")
  .then((response) => response.json())
  .then((data) => {
    let output = "";
    let selectOutput = "";
    data.forEach((obj) => {
      output += `
         <tr>
        <td>${obj.broj_tecajnice}</td>
        <td>${obj.datum_primjene}</td>
        <td>${obj.drzava}</td>
        <td>${obj.drzava_iso}</td>
        <td>${obj.jedinica}</td>
        <td>${obj.kupovni_tecaj}</td>
        <td>${obj.prodajni_tecaj}</td>
        <td>${obj.sifra_valute}</td>
        <td class="tecaj">${obj.srednji_tecaj}</td>
        <td>${obj.valuta}</td>
        <td id="konverzija"></td>
        </tr>
        `;
      selectOutput += `
        <option value="${obj.srednji_tecaj}">${obj.valuta}</option>
           `;
    });

    document.getElementById("dynamicTable").innerHTML = output;
    document.getElementById("valutaSelect").innerHTML = selectOutput;
  });

const convert = () => {
  const konverzijaColumn = document.getElementById("konverzija");
  let selectedCurr = document.getElementById("valutaSelect").value;
  let enteredValue = document.getElementById("inputNumber").value;
  console.log(selectedCurr / enteredValue);
};
