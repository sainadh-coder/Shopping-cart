import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.InputMismatchException;
import java.util.List;
import java.util.Scanner;
import java.util.Timer;
import java.util.TimerTask;

import javax.sound.sampled.AudioInputStream;


public class Main {
  public static void main(String[] args) 
  {
    Scanner scanner = new Scanner(System.in);
   /* double n1 = 0;
    double n2 = 0;
    int i=0;
    System.out.print("Enter the value of the first integer : ");
    n1 = scanner.nextDouble();
    System.out.print("Enter the value of the second integer : ");
    n2 = scanner.nextDouble();
    System.out.print("Enter the value of i :");
    i = scanner.nextInt();
    for(i=1;i<6;i++)
    {if(i==1)
    {
      System.out.println("The addition of"+n1 +"and" + n2 +"is " +n1+n2);
    }
    else if (i==2) {
      System.out.println(n1-n2);
    }
    else if (i==3) {
      System.out.println(n1*n2);
    }
    else if(i==4){
      System.out.println(n1/n2);
    }
    if (i==5) {
      System.out.println(n1%n2);
    }
    }
    
  double weight;
  double newWeight;
  int choice;  
  System.out.println("Weight conversion program");
  System.out.println("1:Convert to kgs");
  System.out.println("2.Convert to lbs");
  System.out.println(("Choose an option"));
  choice = scanner.nextInt();
  if (choice==1) {
    System.out.print("Enter the weight in lbs : ");
    weight = scanner.nextDouble();
    newWeight = weight * 0.453592;
    System.out.printf("The new weight in kgs is: %.2f", newWeight);
  }
  else if(choice == 2){
    System.out.print("Enter the weight in kgs: ");
    weight = scanner.nextDouble();
    newWeight = weight * 2.20462;
    System.out.printf("The new weight in lbs is: %.2f", newWeight);
  }
  else{
    System.out.println("That was not a valid choice");
  }
  
  int score = 70;
  String passorfail = (score>=60)? "Pass" : "Fail";
  System.out.println(passorfail);

  double temp;
  double newtemp;
  String unit;

  System.out.print("Enter the temperature : ");
  temp = scanner.nextDouble();

  System.out.print("Enter the unit to convert into (C or F ): ");
  unit = scanner.next().toUpperCase();

  newtemp = (unit.equals("C")) ? (temp-32)*5/9 : (temp*5/9)+32;
  System.out.printf("%.1f %s" , newtemp , unit);


  String day = "Monday";
  switch(day)
  {
    case "Monday" -> System.out.println("It is a weekday");
  }

  //  Calculator 
  double n1;
  double n2;
  double r;
  char operator;
  int i;
  System.out.println("Enter the Operator");
  System.out.println("+  -  *  /");
  operator =  scanner.next().charAt(0);

  System.out.print("Enter the first number : ");
  n1 = scanner.nextDouble();

  System.out.print("Enter the second number : ");
  n2 = scanner.nextDouble();

  switch (operator) 
  {
    case '+' : r = n1+n2; System.out.printf("%.2f" , r);
    break;
    case '-' : r = n1-n2; System.out.printf("%.2f" , r);
    break;
    case '*' : r = n1*n2; System.out.printf("%.2f" , r);
    break;
    case '/' : r = n1/n2; System.out.printf("%.2f" , r);
    break;
  
    default:
    System.out.println("Enter a valid operator");
      break;
  }
  int i;
  for(i=0;i<11;i++)
  {
    
    if (i==8) 
    {
      continue;
    }
    System.out.println(i);
  }*/
  /*int r;
  int c;
  char symbol;

  System.out.print("Enter the number of rows : ");
  r = scanner.nextInt();
  System.out.print("Enter the number of columns : ");
  c = scanner.nextInt();
  System.out.print("Enter the symbol to use : ");
  symbol = scanner.next().charAt(0);
  for (int i = 0; i < r; i++) 
  {
    for (int j = 0; j < c; j++) 
    {
      System.out.print(symbol);
    }
    System.out.println();
  }
  int n=12536;
  System.out.println(n*n);
  int x = 1;
  doSomething();*/


 /* Random random = new Random();
  int numofdice;
  int total=0;
  System.out.print("Enter the number of dice to roll : ");
  numofdice = scanner.nextInt();
  if (numofdice>0)
  {
    for(int i=0 ; i<numofdice ; i++)
    {
      int roll = random.nextInt(1,7);
      printDie(roll);
      System.out.println("You rolled : " + roll);
      total += roll;
    }
    System.out.println(total);
  }
  else{
    System.out.println("The number of dice must be greater than zero");
  }

  
  }
  static void printDie(int roll)
  {
    String dice1 = """
         -------
        |       |
        |   ●   |
        |       |
         -------
        
        """;
    String dice2 = """
          -------
         | ●     |
         |   ●   |
         |       |
          -------
         
         """;
    String dice3 = """
         -------
        | ●     |
        |   ●   |
        |     ● |
         -------
        
        """;
    String dice4 = """
          -------
         |●     ●|
         |       |
         |●     ●|
          -------
         
         """;    
    String dice5 = """
          -------
         |●     ●|
         |   ●   |
         |●     ●|
          -------
         
         """;  
    String dice6 = """
          -------
         |●      ●|
         |●      ●|
         |●      ●|
          -------
         
         """;  
      switch(roll)
      {
        case 1 :System.out.print(dice1);
        break;
        case 2 :System.out.print(dice2);
        break;
        case 3 :System.out.print(dice3);
        break;
        case 4 :System.out.print(dice4);
        break;
        case 5 :System.out.print(dice5);
        break;
        case 6 :System.out.print(dice6);
        break;
        default:System.out.println("Invalid roll");
        break;
      }*/



      //Java slot machine

      //Declare variables
      //Display welcome message
      //Play if machine balance>0
      //Enter the bet amount
      //verify if bet>balance
      //Verify if bet >0
      // Subtract bet from balance
      // Spin row
      //Print row
      // get payout
      //ask to play again
      //Display exit message

      /*int balance = 100;
      int bet;
      int payout;
      String[] row;
      
      System.out.println("**********************");
      System.out.println("Welcome to JAVA slots");
      System.out.println("Symbols: * + % @ $ ");
      System.out.println("**********************");

      while(balance>0){
        System.out.println("Current balance: Rs. " + balance);
        System.out.print("Place your bet amount: ");
        bet = scanner.nextInt();

        if(bet>balance){
          System.out.println("Insufficient funds");
          continue;
        }
        else if(bet <= 0){
          System.out.println("Bet must be greater than zero");
          continue;
        }
        else{
          balance-=bet;
          System.out.println("Rs."+balance);
        }

        System.out.println("Spinning...");
        spinRow();

      }*/

/*
      //Abstraction
      System.out.print("Enter the radius");
      double r = scanner.nextDouble();

      Circle circle = new Circle(r);
      Triangle triangle = new Triangle(4,5);
      Rectangle rectangle = new Rectangle(r,r);

      circle.display();
      triangle.display();
      rectangle.display();
      System.out.println(circle.area());
      System.out.println(triangle.area());
      System.out.println(rectangle.area());*/

      /*Dog dog = new Dog();
      Cat cat = new Cat();
      cat.hunt();
      dog.flee();*/

     /* Car car = new Car();
      Bike bike = new Bike();
      Boat boat = new Boat();

      car.go();
      bike.go();
      boat.go();


      Vehicle[] vehicles = {car , bike, boat};

      for(Vehicle vehicle : vehicles)
      {
        vehicle.go();

      
      }*/


      /*
      //Getter and setter methods
      //Getter method allows to make a field readable
      //Setter ,method makes a field writeable
      Bike bike  = new Bike("Charger", "Yellow", 100000);

      bike.setColor("Blue");
      bike.setPrice(10000000);

      System.out.println(bike.getColor()+" "+bike.getModel() +" "+ bike.getPrice());
       */

      /*
       //Aggregation = Represents a "has-a" relationship between objects.
       //              One object contains another as apart of its structure , but the contained object/s can exist independently
       // 
      Book book1 = new Book("The Fellow of the Ring",423); 
      Book book2 = new Book("The Two towers",325); 
      Book book3 = new Book("The Return of the king",510); 

      Book[] books = {book1 , book2 , book3};
      Library library = new Library("Sainadh public library",2006,books);
      library.displayInfo();
      */


      /*
      //Composition
      Bike bike = new Bike("Corvette" , 2025 , "V8");
      System.out.println(bike.model);
      System.out.println(bike.year);
      System.out.println(bike.engine.type);

      bike.start();
      */

      //Wrapper classes
      /*//Auto boxing
      Integer a = 123;
      Double b = 3.14;
      Character c = '$';
      Boolean d = true;

      //Unboxing
      int x = a;
      System.out.println(x);*/

      /*//toString method converts everything into  a string
      String a = Integer.toString(123);
      String b = Double.toString(3.14);
      System.out.println(a);
      StringBuilder reversedStr = new StringBuilder(a);

      //*********Reversing a string*******
      System.out.println(reversedStr.reverse().toString());
      System.out.println(reversedStr);*/

      //char letter = 'b';
      //System.out.println(Character.isLetter(letter));



      //Array lists
      /*
      ArrayList<String> fruits = new ArrayList<>();
      fruits.add("Apple");
      fruits.add("Banana");
      fruits.add("Orange");
      //fruits.remove(1);
      System.out.println(fruits.size());
      Collections.sort(fruits);
      for (String fruit : fruits) 
      {
        System.out.println(fruit);
        
      }*/
      /*
      //Exercise on it

      ArrayList<String> foods = new ArrayList<>();
      System.out.print("Enter the number of food you would like : ");
      int numOfFood = scanner.nextInt();
      scanner.nextLine();
      
      for (int i = 0; i <= numOfFood; i++) 
      {
        System.out.print("Enter food # "+i+" : ");
        String food = scanner.nextLine();
        foods.add(food);
        
      }
      System.out.println(foods);
      Collections.sort(foods);
      System.out.println(foods);
      */
      
      //Exceptional handling
     /* 
      try
      {
        System.out.print("Enter a number : ");
        int number = scanner.nextInt();
        System.out.println(number);
      }
      catch(InputMismatchException d)
      {
        System.out.println("That wasn't a number");
      }
      catch(ArithmeticException e)
      {
        System.out.println("You cant divide by zero");
      }
      catch(Exception e)
      {
        //Safety net
        System.out.println("Something went wrong");
      }
      finally{
        System.out.println("This always executes");
      }
        */
      
      /*  
      //File writer
      String filePath = "C:\\Users\\haris\\OneDrive\\Desktop\\test.txt  ";
      String textContent = """
          I like Mangoes
          I like oranges
          I like apples
          """;
      try(FileWriter writer = new FileWriter(filePath))
      {
        writer.write(textContent);
        System.out.println("File has been written");

      }
      catch(IOException e)
      {
        System.out.println("Could not write file");

      }
      */
     //*****************// 
    //File reading
    /*String filePath = "C:\\Users\\haris\\OneDrive\\Desktop\\test.txt  ";  

    try(BufferedReader reader = new BufferedReader(new FileReader(filePath)))
    {
      String line;
      while ((line = reader.readLine()) != null) 
      {
        System.out.println(line);
        
      }

    }
    catch(FileNotFoundException e)
    {
      System.out.println("Could not locate file");
    }
    catch(IOException e)
    {
      System.out.println("Something went wrong");
    }*/

    //****************Date and time */
    //Custom format

    /*LocalDateTime dateTime = LocalDateTime.now();
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
    String newDateTimme = dateTime.format(formatter);
    System.out.println(newDateTimme);*/
    /*LocalDateTime date1= LocalDateTime.of(2024, 12, 25, 12, 10, 50);
    LocalDateTime date2= LocalDateTime.of(2025, 12, 25, 12, 10, 50);
 
    System.out.println(date1);
    System.out.println(date2);
    if (date1.isBefore(date2)) 
    {
      System.out.println("Yes date1 is earlier than 2");
      
    }
    else{
      System.out.println("no");
    }*/
     /*
    Timer timer = new Timer();
    TimerTask task = new TimerTask() 
    
    {
      int count = 3;
      @Override
      public void run()
      {
        
        System.out.println("Hello");
        count--;
        if (count<=0) 
        {
          System.out.println("Task complete!");
          timer.cancel();
          
        }

      } 
    };
    timer.schedule(task, 0,1000); // After delay of 3 seconds i mean 3000 milli seconds do your task*/

/*
    //Java countdown timer program
    Timer timer = new Timer();
    TimerTask task = new TimerTask()
    {
      final int count = 5;
      @Override
      public void run()
      {
        System.out.println(count);
        
        
        if(count<0)
        {
          System.out.println("Happy New Year!");
          timer.cancel();

        }
      }
    };
    timer.scheduleAtFixedRate(task, 0, 1000);
    */
    
    /*
    int n = scanner.nextInt();

        boolean isPrime = true;

        if (n <= 1) 
        {
          isPrime = false;
        } 
        else 
        {
            for (int i = 2; i <= Math.sqrt(n); i++) 
            {
                if (n % i == 0) 
                {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) 
        {
            System.out.println("The given number is prime");
        } 
        else 
        {
            System.out.println("Composite");
        }
    */

    //Fibinocci sequence
    System.out.print("Enter the number: ");
    int n = scanner.nextInt();    
    List<Integer> l = new ArrayList<>();
    l.add(0);
    l.add(1);
    for(int i=2;i<=n;i++)
    {
      l.add( l.get(i-1)+l.get(i-2));
    }
    System.out.println(l);
    System.out.println(7.0/2);


     scanner.close();
    
  }
  
 
}
