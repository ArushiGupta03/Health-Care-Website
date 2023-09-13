bmig=0;
fatg=0;
geng="";
function dietlink(bmi,fat,gender)
{
    // bmi=bmig;
    // fat=fatg;
    // gender=geng;

    
    let optionval=0;

    if (gender=="Male")
    {
      if(bmi < 18.5 || fat < 5)
         optionval=1
      else
         if ((bmi >= 18.5 && bmi < 25) || (fat >= 5 && fat < 17))
            optionval=2
         else
            if ((bmi >= 25 && bmi < 30) || (fat >= 17 && fat < 24))
               optionval=3
            else
               optionval=4
    }

    if (gender=="Female")
    {
      if(bmi < 18.5 || fat < 13)
         optionval=1
      else
         if ((bmi >= 18.5 && bmi < 25) || (fat >= 13 && fat < 24))
            optionval=2
         else
            if ((bmi >= 25 && bmi < 30) || (fat >= 24 && fat < 31))
               optionval=3
            else
               optionval=4
    }



    if(optionval==1)
          document.getElementById("linkbutton").href = "index.html#under";
    else
       if (optionval==2)
          document.getElementById("linkbutton").href = "index.html#normal";
       else
          if (optionval==3)
               document.getElementById("linkbutton").href = "index.html#over";
               else
               if (optionval==4)
                    document.getElementById("linkbutton").href = "index.html#obese";
               

}
function bodycomposition(w,wu,h,hu,age)

{  
  
  
   gen = document.querySelector('input[name="gender"]:checked').value;

  if (wu == "Kg")
     wmult = 1;
  else
     wmult = 0.4536 
  
  if (hu == "m")
     hmult = 1;
  else 
  if (hu == "cm")
     hmult = 0.01 
  else
    hmult = 0.0254


    weight = w * wmult;
    height = h * hmult;


  
bmi = parseFloat(weight/(height*height));

  
document.getElementById("bmi").innerHTML =  bmi.toFixed(2);

 //alert("BMI="+bmi);

 
  fatval=0;
  if (gen == "Male" )
  {
      fatval=bodyfatmale(bmi, age).toFixed(2);
      document.getElementById("fat").innerHTML =  fatval;
  }
  else
  if (gen == "Female" )
  {
      fatval=bodyfatfemale(bmi, age).toFixed(2)
      document.getElementById("fat").innerHTML =  fatval;
  }
 
  if (gen == "Male" )
      document.getElementById("bmr").innerHTML =  bmrmale(weight, height, age).toFixed(2);
  else
      if (gen == "Female" )
          document.getElementById("bmr").innerHTML =  bmrfemale(weight, height, age).toFixed(2);

   bmig=bmi;
   fatg=fatval;
   geng=gen;
   dietlink(bmi,fatval,gen)
  

}  

function bodyfatmale(bmi, age)
{

    return 1.20 * bmi + 0.23 * age - 16.2

}

function bodyfatfemale(bmi, age)
{

    return 1.20 * bmi + 0.23 * age - 5.4

}

function bmrmale(w, h, a)
{

    return 10 * w + 6.25 * (h * 100) - 5 * a + 5
}

function bmrfemale(w, h, a)
{

    return 10 * w + 6.25 * (h * 100) - 5 * a -161
}
