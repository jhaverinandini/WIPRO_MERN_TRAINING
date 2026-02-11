public class practice {
    public static void main(String[] args) {
    
        String s = "Here is my java program";
        s=s.toLowerCase();
    String [] w = s.split(" ");
    int wordCount = w.length;

    for(int i=0;i<s.length();i++){
        char ch = s.charAt(i);
    
        if(ch=='a' || ch=='e'||ch=='i'||ch=='o'||ch=='u') {
        }
    }
                System.out.println("Total words: " + wordCount);

    }
}