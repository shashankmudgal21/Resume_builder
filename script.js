addExp = () =>{
   let newNode = document.createElement('textarea');
   newNode.classList.add('we-exp');
   newNode.classList.add('form-control');
   newNode.classList.add('mt-2');
   newNode.setAttribute('rows','3');
   let expDivob = document.getElementById('expDiv');
   let expBtnob = document.getElementById('expBtn');
   expDivob.insertBefore(newNode,expBtnob);
}
addqual = () =>{
   let newNode = document.createElement('textarea');
   newNode.classList.add('qe-field');
   newNode.classList.add('form-control');
   newNode.classList.add('mt-2');
   newNode.setAttribute('rows','3');
   let expDivob = document.getElementById('qualDiv');
   let expBtnob = document.getElementById('qualBtn');
   expDivob.insertBefore(newNode,expBtnob);
}
generateCV = () =>{
    let n = document.getElementById('name').value;
    let p = document.getElementById('phone').value;
    document.getElementById('nameT').innerHTML = n;
    document.getElementById('nameT1').innerHTML = n;
    document.getElementById('phoneT').innerHTML = p;
    document.getElementById('addressT').innerHTML =  document.getElementById('address').value;
    document.getElementById('fbt').innerHTML =  document.getElementById('fb').value;
    document.getElementById('instat').innerHTML =  document.getElementById('insta').value;
    document.getElementById('linkt').innerHTML =  document.getElementById('link').value;
    document.getElementById('objT').innerHTML =  document.getElementById('objective').value;
    let we = document.getElementsByClassName('we-exp');
    let str = '';
    Array.from(we).forEach((e)=>{
      str+=`<li> ${e.value} </li>`;
    })
    document.getElementById('weT').innerHTML = str;
    let eq = document.getElementsByClassName('qe-field');
    let st = '';
    Array.from(eq).forEach((e)=>{
      st+=`<li> ${e.value} </li>`;
    })
    document.getElementById('eqT').innerHTML = st;
    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';
}

function printPage(){
   window.print();
}