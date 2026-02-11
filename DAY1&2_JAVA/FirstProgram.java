public class FirstProgram {
    public static void main(String[] args) {
        String s = "Here is my java program";
        s=s.toLowerCase();

        int count = 0;
        String[] w = s.split(" ");
        int wordCount = w.length;
         // to handle both upper & lower case

        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);

            if (ch == 'a' || ch == 'e' || ch == 'i' || 
                ch == 'o' || ch == 'u') {
                count++;
            }
        }

        System.out.println("Number of vowels: " + count);
        System.out.println("Total words: " + wordCount);
    }
}