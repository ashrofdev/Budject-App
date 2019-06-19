let budget = 0;
let infoInc = 0;
let infoExp = 0;

const DOMEls = {
  addNew: document.querySelector(".add"),
  discription: document.querySelector(".input1"),
  type: document.querySelector("select"),
  amount: document.querySelector(".input2"),
  budget: document.querySelector(".budget"),
  inc: document.querySelector(".inc"),
  exp: document.querySelector('.exp'),
  income: document.querySelector(".income"),
  percentage: document.querySelector(".percentage"),
}


const create = () => {
  const details = {
    description: DOMEls.discription.value,
    type: DOMEls.type.value,
    amount: parseInt(DOMEls.amount.value)
  };
 

  let go = () => {
    if (details.description !== "") {
      DOMEls.budget.textContent = "$" + budget;
      if (details.type === "inc") {
        DOMEls.budget.classList.add("increase");
        setTimeout(() => {
          DOMEls.budget.classList.remove("increase");
        }, 1000);
        DOMEls.inc.classList.add("increase2");
        setTimeout(() => {
          DOMEls.inc.classList.remove("increase2");
        }, 1000);
        budget += details.amount;
        DOMEls.budget.textContent = "$" + budget;
  
        infoInc += details.amount;
        let info2 = document.querySelector(".inc .value");
        info2.textContent = "$" + infoInc;
  
        const incEl = document.createElement("div");
        incEl.classList.add("inc-el");
        DOMEls.income.appendChild(incEl);
  
        const disc = document.createElement("div");
        disc.classList.add("description");
        disc.textContent = details.description;
        incEl.appendChild(disc);
  
        const amount = document.createElement("div");
        amount.classList.add("amount");
        amount.textContent = details.amount;
        incEl.appendChild(amount);
  
        const remove = document.createElement("button");
        remove.textContent = "x";
        incEl.appendChild(remove);
  
        remove.addEventListener("click", () => {
            incEl.remove();
            budget -= parseInt(amount.textContent);
            DOMEls.budget.textContent = '$' + budget;
            info2.textContent = '$' + budget
          
          console.log(budget);
        });
      } else if (details.type === "exp") {
        DOMEls.budget.classList.add("decrease");
        setTimeout(() => {
          DOMEls.budget.classList.remove("decrease");
        }, 1000);
        DOMEls.exp.classList.add("decrease2");
        setTimeout(() => {
          DOMEls.exp.classList.remove("decrease2");
        }, 1000);
        budget -= details.amount;
        DOMEls.budget.textContent = "$" + budget;
  
        infoExp += details.amount;
        let info2 = document.querySelector(".exp .value");
        info2.textContent = "$-" + infoExp;
  
        const expEl = document.createElement("div");
        expEl.classList.add("exp-el");
        document.querySelector(".expenses").appendChild(expEl);
  
        const disc = document.createElement("div");
        disc.classList.add("description");
        disc.textContent = details.description;
        expEl.appendChild(disc);
  
        const amount = document.createElement("div");
        amount.classList.add("amount");
        amount.textContent = details.amount;
        expEl.appendChild(amount);
  
        const percent = document.createElement("div");
        percent.classList.add("percent");
        percent.textContent = Math.round((details.amount / infoInc) * 100) + "%";
        expEl.appendChild(percent);
  
        DOMEls.percentage.textContent =
          Math.round((infoExp / infoInc) * 100) + "%";
  
        const remove = document.createElement("button");
        remove.textContent = "x";
        expEl.appendChild(remove);
        remove.addEventListener("click", () => {
          expEl.remove();
          budget += parseInt(amount.textContent);
          DOMEls.budget.textContent = "$" + budget;
          console.log(budget);
        });
      }
    }
    DOMEls.discription.value = "";
    DOMEls.amount.value = "";
  }
  go()
    
}

DOMEls.addNew.addEventListener("click", create);

DOMEls.type.addEventListener("change", () => {
  document.querySelectorAll("input").forEach(e => {
    e.classList.toggle("red");
  });
  DOMEls.type.classList.toggle("red");
  DOMEls.addNew.classList.toggle("red");
});
