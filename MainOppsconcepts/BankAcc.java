package MainOppsconcepts;
import java.util.Scanner;

public class BankAcc {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        double balance = 0;
        double loanAmount = 0;
        int months = 0;
        double emi = 0;

        while (true) {

            System.out.println("\n----- BANK MENU -----");
            System.out.println("1. Deposit");
            System.out.println("2. Withdraw");
            System.out.println("3. Check Balance");
            System.out.println("4. Take Loan & Calculate EMI");
            System.out.println("5. Pay EMI");
            System.out.println("6. Exit");

            System.out.print("Choose an option: ");
            int choice = sc.nextInt();

            
            if (choice == 1) {
                System.out.print("Enter deposit amount: ");
                double deposit = sc.nextDouble();
                balance = balance + deposit;
                System.out.println("Amount deposited successfully.");
            }

            
            else if (choice == 2) {
                System.out.print("Enter withdraw amount: ");
                double withdraw = sc.nextDouble();

                if (withdraw <= balance) {
                    balance = balance - withdraw;
                    System.out.println("Please collect your cash.");
                } else {
                    System.out.println("Insufficient balance!");
                }
            }

            
            else if (choice == 3) {
                System.out.println("Current Balance: " + balance);
            }

            
            else if (choice == 4) {
                System.out.print("Enter loan amount: ");
                loanAmount = sc.nextDouble();

                System.out.print("Enter number of months: ");
                months = sc.nextInt();

               
                emi = loanAmount / months;

                System.out.println("Loan Approved!");
                System.out.println("Monthly EMI: " + emi);
            }

            // EMI Payment
            else if (choice == 5) {

                if (emi == 0) {
                    System.out.println("No active loan found!");
                } else {
                    System.out.println("Choose payment method:");
                    System.out.println("1. Cash");
                    System.out.println("2. Card");

                    int payChoice = sc.nextInt();

                    
                    if (payChoice == 1 || payChoice == 2) {

                        if (balance >= emi) {
                            balance = balance - emi;
                            loanAmount = loanAmount - emi;
                            months--;

                            System.out.println("EMI paid successfully.");

                            if (months == 0) {
                                emi = 0;
                                System.out.println("Loan fully paid!");
                            }
                        } else {
                            System.out.println("Not enough balance to pay EMI.");
                        }

                    } else {
                        System.out.println("Invalid payment option.");
                    }
                }
            }

            // Exit
            else if (choice == 6) {
                System.out.println("Thank you for using our bank service.");
                break;
            }

            else {
                System.out.println("Invalid choice. Try again.");
            }
        }

        sc.close();
    }
}