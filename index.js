var x=1;

sum=0;
while (x<=99) {
      if(x%3==0 && x%5==0){
         sum=sum+x;
         document.write(" "+x);
      }
   x=x+2;
 
   
}
document.write(" Result= "+sum);



