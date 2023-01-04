/*
The program is for our ADW Artistic Project!
We want to make a program that is simple yet very educational. We are trying to embrace what makes us as women unique and individual while still being able to come together and appreciate our history as black women in the world! taking it back to when we use to play customizing games and a mix of symbolism, we will make a program where based off of the items you choose for your queen, it will tell you some fun facts, characteristics, or just a affirmation (all based off of the reading from ADW Semester 1)
*/

/*
ALGORITHM FOR CHANGING THE CLOTHES 
------------------------------------
1. Make a counter for each aspect of clothes set it to zero 
2. Make an if elif statment where if the specific counter is at a number then it will set one of the images to true and the rest to false 
3. This loop will repeat when the number goes over the limit (if x > 5 --> x = 1)
4. seperate if else statments where if a specific item of clothes is set to true then it will appear else if set to false it will disapear 
*/

/*
hair --> 5. represents freedoms of the black woman (resiliance and expression)
jewlery --> 3. different cultures / representations of status 
shirts --> 6. colors to represent emotions 
pants --> 2. options of woman (new vs old womenn)
shoes --> 3. claiming identity,the climb to individuality ( talk about history of different people claiming their indvidual identity )

*/

//music variables
//song = loadSound('India')
var blackgirlSong;
var beyoncesong;

//font for game 
var mainFont;

//variable for stage in the game 
var stage = 0

//setting variables 
var model;

//hair variables 
var hair1;
var afro;
var hair2;
var cornrows;
var hair3;
var bob;
var hair4;
var puffs; 

//jewlery variables 
var j1;
var hoops;
var j2;
var pearls;
var j3;
var bangels;

//shirts variables
var s1;
var red;
var s2;
var orange;
var s3;
var yellow;
var s4;
var green;
var s5;
var blue;
var s6;
var purple;

//pants variables 
var p1;
var jeans;
var p2;
var skirt; 

//shoes variables 
var shoe1;
var black;
var shoe2;
var white;
var shoe3;
var grey; 

//updated number variables 
var hairs = 0;
var jewlery = 0;
var shirts = 0;
var pants = 0;
var shoes = 0; 
//----------------------------------------------------------------

//where to put the images/files to load 
function preload ()
{
  //font 
  mainFont = loadFont('adwFont.ttf')
  model = loadImage('ogGirl.png')
  //hair
  hair1 = loadImage('afro.png')
  hair2 = loadImage('cornrows.png')
  hair3 = loadImage('bob.png')
  hair4 = loadImage('puffs.png')
  
  //jewlery
  j1 = loadImage('Hoops.png')
  j2 = loadImage('pearls.png')
  j3 = loadImage('bangels.png')

  //shirts
  s1 = loadImage('red.png')
  s2 = loadImage('orange.png')
  s3 = loadImage('yellow.png')
  s4 = loadImage('green.png')
  s5 = loadImage('blue.png')
  s6 = loadImage('purple.png')

  //pants
  p1 = loadImage('pants.png')
  p2 = loadImage('skirt.png')
  
  //shoes
  shoe1 = loadImage('blackShoes.png')
  shoe2 = loadImage('whiteShoes.png')
  shoe3 = loadImage('greyShoes.png')

  blackgirlSong = loadSound('India.mp3')
  beyoncesong = loadSound('BSG.mp3')
}

//what will happen when it initilizes 
function setup()
  {
    createCanvas(500,500);
    background(224, 205, 173);
    blackgirlSong.play(); //plays the song right from the start
    //blackgirlSong.loop(); //loops song
  }

//having a welcome / start screen 
function splash()
  {
    createCanvas(500,500)
    background(224, 205, 173)
    
    //title 
    textFont(mainFont);
    fill(255);
    stroke(0)
    strokeWeight(5);
    textSize(80);
    text("Create a Queen", width/7,150)
    textSize(25);
    strokeWeight(2)
    text("By Shilah, Journei, and Trinity ",150,200)

    //start instructions 
    textSize(50)
    strokeWeight(4)
    text("press 's' to start!",115,400)
  
  }

//helps call the different screens (start,main,results,reset to start)
function draw()
  {
    //start screen
    if (stage == 0)
    {
      splash();
    }

    //main screen
    if (stage == 1)
    {
      game(); 
    }

    //reset function
    if (stage == 2)
    {
      resetScreen()
    }

    //results
    if (stage == 3)
    {
      results()
    }
  }

//comands that have all the statments to make items appear (main game)
function game()
  {
    //image of the model will always appear 
    image(model,75,100,350,350)
    
    //changing hair styles--------------------------------------------
    if (hairs == 0)
    {
     clearAll()
     image(model,75,100,350,350)
    }
    else if (hairs == 1)
    {
      //Afro Appears
      clearAll()
      afro = image(hair1,75,100,350,350)
    }
    else if (hairs == 2)
    {
      //cornrows appear
      clearAll()
      cornrows = image(hair2,75,100,350,350)
    }
    else if (hairs == 3)
    {
      clearAll()
      bob = image(hair3,75,100,350,350)
    }
    else if (hairs == 4)
    {
      clearAll()
      puffs = image(hair4,75,100,350,350)
    }

    //changing shirts -------------------------------------------------
    if (shirts == 1)
    {
      red = image(s1,75,100,350,350)
    }
    else if (shirts == 2)
    {
      orange = image(s2,75,100,350,350)
    }
    else if (shirts == 3)
    {
      yellow = image(s3,75,100,350,350)
    }
    else if (shirts == 4)
    {
      green = image(s4,75,100,350,350)
    }
    else if (shirts == 5)
    {
      blue = image(s5,75,100,350,350)
    }
    else if (shirts == 6)
    {
      purple = image(s6,75,100,350,350)
    }

    //changing jewlery ------------------------------------------------
    if(jewlery == 1)
    {
      hoops = image(j1,75,100,350,350)
    }
    else if (jewlery == 2)
    {
      pearls = image(j2,75,100,350,350)
    }
    else if (jewlery == 3)
    {
      bangels = image(j3,75,100,350,350)
    }

    //changing pants --------------------------------------------------
    if(pants == 1)
    {
      jeans = image(p1,75,100,350,350)
    }
    else if (pants == 2)
    {
      skirt = image(p2,75,100,350,350)
    }

    //changing shoes --------------------------------------------------
    if (shoes == 1)
    {
      black = image(shoe1,75,100,350,350)
    }
    else if (shoes == 2)
    {
      white = image(shoe2,75,100,350,350)
    }
    else if (shoes == 3)
    {
      grey = image(shoe3,75,100,350,350)
    }
    
    //platform to stand on 
    fill(158, 112, 27)
    rect(0,430,500,100,10)
    
    //text instructions 
    fill(255)
    textSize(30)
    strokeWeight(2)
    text("Press Specific Number to change your Queens Look!",10,25)
    textSize(25)
    text("1: Hair",10,50)
    text("2: Jewlery",10,75)
    text("3: Shirt",10,100)
    text("4: Bottoms",10,125)
    text("5: Shoes",10,150)

    //done comands / how to go between screens 
    textSize(22)
    text("Enter: 'r' to reset",10,450)
    text("          'd' when done", 10, 475)
    text("          'b' go back to start screen",10,500)
    text("'m' play music",365,450)
    text("'p' pause music",365,475)
    
  }

//results on what each item means 
function results() //-----------------------------------------
  {
    clear()
    createCanvas(500,500)
    background(224, 205, 173)
    textSize(20)
    image(model,350,15,200,200)
   
    //results for hair options 
    if (hairs == 1)
    {
      afro = image(hair1,350,15,200,200)
      text("The afro was a key symbol of black resistance during the 70s and ",5,50)
      text("80s.Women like Angela Davis rocked the afro and",5,70)
      text("preached to Black Americans about the need to stand up against",5,90)
      text("the injustices they faced while being Black in America.",5,110)
      
    }
    else if (hairs == 2)
    {
      cornrows = image(hair2,350,15,200,200)
      text("Cornrows date back to 3000 B.C. in Africa where they were used ",5,50)
      text("as a communication medium, which transcended to the Americas during",5,70)
      text("slavery. In Africa, this hairstyle was also used to signifiy key things",5,90)
      text("such as a tribe or group, social position, age, martial status, or ",5,110)
      text("occupation; they are also done for aesthetic purposes too",5,130)
      
    }
    else if (hairs == 3)
    {
      bob = image(hair3,350,15,200,200)
      text("The bob became a fashion statement for Black women starting in",5,50)
      text("the 1920s. It was said to popularized because of how it was described:",5,70)
      text("easy, low-maintenance, cute, sassy and sophicated. ",5,90)
      
    }
    else if (hairs == 4)
    {
      puffs = image(hair4,350,15,200,200)
      text("This puff style has no major historic significance. This is",5,50)
      text("just a fun and modern hairstyle that combined the beauty and class of the ",5,70)
      text("afro and cornrows while making a cute updo.",5,90)
      
    }
    else if (hairs == 0)//-----------------------------
    {
      text("Being bald in Africa has a stigma depending on the region or", 5,50)
      text("country you are in, but in some parts, baldness have a cultural and/or",5,70)
      text("religious significance, while other times the baldness showed status and ",5,90)
      text("occupation, such as the Dora Milaje. Their bald heads signified their",5,110)
      text("honor, valor, strength, and beauty. ",5,130)
    }

    //results for jewlery options 
    if (jewlery == 1)
    {
      hoops = image(j1,350,15,200,200)
      text("Hoop earrings symbolized resistance and strength ",5,150)
      text("in the modern Black Community",5,170)
      
    }
    else if (jewlery == 2)
    {
      pearls = image(j2,350,15,200,200)
      text("Necklaces, mainly choker necklaces, showed the",5,150)
      text("status and level of wealth of ancient Africa women.",5,170)
      
    }
    else if (jewlery == 3)
    {
      bangels = image(j3,350,15,200,200)
      text("Bangles also showed the level of wealth and status of African ",5,150)
      text("women. They were also a form of currency and trade.",5,170)
      
    }

    //results for shirts 
    if (shirts == 1)
    {
      red = image(s1,350,15,200,200)
      text("The red turtleneck represents passion and the endless", 5,250)
      text("sacrifices made for freedom and equality.",5,270)
      
    }
    else if (shirts == 2)
    {
      orange = image(s2,350,15,200,200)
      text("The orange top symbolizes health, vitality, and growth within ", 5,250)
      text("black women throughout society.",5,270)
      
    }
    else if (shirts == 3)
    {
      yellow = image(s3,350,15,200,200)
      text("The yellow hoodie indicates the fact that black women are ", 5,250)
      text("deserving of happiness and all good things in life.",5,270)
      
    }
    else if (shirts == 4)
    {
      green = image(s4,350,15,200,200)
      text("The green sweater vest symbolizes prosperity and the", 5,250)
      text("individual growth that will eventually lead to stability.",5,270)
      
    }
    else if (shirts == 5)
    {
      blue = image(s5,350,15,200,200)
      text("The blue shirt represents the importance of serenity and", 5,250)
      text("being at peace throughout all struggles.",5,270)
      
    }
    else if (shirts == 6)
    {
      purple = image(s6,350,15,200,200)
      text("The purple turtle neck indicates femininity and royalty.", 5,250)
    }

    //results for pants 
    if (pants == 1)
    {
      jeans = image(p1,350,15,200,200)
      text("Denim serves as a reminder of a not-so-distant past for black ",5,350)
      text("women, which eventually led to the abandonment of respectability politics",5,370)
      text("through the use of jeans.",5,390)

    }
    else if (pants == 2)
    {
      skirt = image(p2,350,15,200,200)
      text("Freshly freed black women found liberation and a sense",5,350)
      text("of elegance in wearing skirts.",5,370)
      
    }

    //results for shoes 
    if (shoes == 1)
    {
      black = image(shoe1,350,15,200,200)
      text("The black shoes represent the black identity being fully", 5,450)
      text("claimed and appreciated.",5,470)
      
    }
    else if (shoes == 2)
    {
      white = image(shoe2,350,15,200,200)
      text("The white shoes represent one not claiming their identity ",5,450)
      text("and not being able to.",5,470)
      
    }
    else if (shoes == 3)
    {
      grey = image(shoe3,350,15,200,200)
      text("The gray shoes represent the process of claiming", 5,450)
      text("your identity.",5,470)
      
    }

    textSize(35)
    text("Thank You For Playing, press R to restart!", 5,500)
   
  }

//updates background of main screen to allow changes in individual items 
function clearAll()
  {
    clear()
    background(224, 205, 173)
    image(model,75,100,350,350) //----------------------------------
  }

//main screen resets and goes back to starting screen 
function resetScreen()
  {
    clear();
    background(224, 205, 173);
    
    hairs = 0;
    jewlery = 0;
    shirts = 0;
    pants = 0;
    shoes = 0;
  
    
    //calls the game once its done reseting the variables 
    splash();
  }

//different keys to play the game------------------------------------
function keyPressed()
   {
     //music keys
     if (key == "m")
     {
       blackgirlSong.play()
     }
     if (key == "p")
     {
       blackgirlSong.pause()
     }
     if (key == "a")
     {
       beyoncesong.play()
     }
     if (key == "z")
     {
       beyoncesong.pause() //------------------------------------
     }
     //key to start the game 
     if (key == "s")
     {
       stage = 1
      
     }
    //key to go back to the start screen
     if (key == "b")
     {
       stage = 0
     }

     //key to reset model 
     if (key == "r")
     {
       stage = 2
       beyoncesong.stop()
       //blackirlSong.stop()
       blackgirlSong.play()
       //blackgirlSong.loop()
     }

     //key to show results 
     if (key == "d")
     {
       stage = 3
       blackgirlSong.stop()
       beyoncesong.play()
       //beyoncesong.loop()
     }
     
     //press 1 for hair options (5)
     if (key == "1")
     {
       hairs += 1
       
      //this resets the loop of hair styles 
       if (hairs > 4)
       {
         hairs = 0
       }
       
     }
    
     //press 2 for jewlery options 
     if (key == "2")
     {
       jewlery += 1
       
       //this resets the loop of jewlery
       if (jewlery > 3)
       {
         jewlery = 0
       }
     }

     //press 3 for shirt options 
     if (key == "3")
     {
       shirts +=1

       //this will reset the loop of shirts
       if(shirts > 6)
       {
         shirts = 1
       }
     }

     //press 4 for pants options 
     if (key == "4")
     {
       pants += 1

       //this will reset the loop of pants 
       if (pants >2)
       {
         pants = 1
       }
     }

     //press 5 for shoe options 
     if (key =="5")
     {
       shoes += 1

       //this will reset loop of shoes 
       if (shoes > 3)
       {
         shoes = 1
       }
     }
   }