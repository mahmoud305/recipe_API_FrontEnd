console.log("heool");
let searchInput = document.getElementById("serachInput");
let searchBtn = document.getElementById("searchBtn");
let mealDiv= document.getElementById("mealDiv");
let mealDesc= document.getElementById("mealDesc");

let allMeals = [];
let mealDetails={};




async function getRecipes(MealTerm = "pizza") {
    let apiResponse = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${MealTerm}`);
    allMeals = (await apiResponse.json()).recipes;
    // console.log(allMeals);
    displayMeals();
}


async function  getMealDetails(mealID){
    console.log(mealID);
    let apiResponse= await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${mealID}`);
    mealDetails= (await apiResponse.json ()).recipe;
    displayMealDetails(mealDetails);
}
 function displayMealDetails(meal){
    //  console.log(meal.ingredients);
    let cartoona1="";
    for(let i=1;i<meal.ingredients.length;i++){
        cartoona1+=` <li class="py-1"> ${meal.ingredients[i]}</li>`;
    }
    // alert("what");
    mealDesc.innerHTML=`  <div class="py-3 ">
    <h2 class="py-1"> ${meal.publisher}</h2>
    <img src="${meal.image_url}" class="w-100" alt="">

    <ul class=" py-2 my-3 dancingFont"> <h5>  ${meal.ingredients[0]}</h5>
    ${cartoona1}     
    </ul>
    <p class="py-2">${meal.title}</p>
    

</div>`
 } 
function displayMeals() {

    let cartoona = "";
    allMeals.forEach(x => {
         cartoona += ` <div class="col-md-4 ">
        <div id="mealDiv" class="mealDiv  text-center " onclick="getMealDetails(${"'"+x.recipe_id+"'"})">
        <img  class="w-100 " src="${x.image_url}"  alt="meal 1">
            <h4 class="py-2"> ${x.publisher}</h4>
            <p >${x.title}</p>

        </div>
    </div>`;
    });
    document.getElementById("meals").innerHTML = cartoona;
}

searchBtn.addEventListener("click", function () {
     if (searchInput.value == "")
        getRecipes();
    else
        getRecipes(searchInput.value);
})


// mealDiv.addEventListener("click",function(e){
// alert("aaaaaaaaa");
// console.log(e.target);
// })
