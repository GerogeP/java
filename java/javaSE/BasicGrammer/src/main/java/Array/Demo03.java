package Array;

public class Demo03 {
    public static void main(String[] args) {
        int[] arrays = {1,2,3,4,5};

        for (int array : arrays){
            System.out.println(array);
        }

        printArray(arrays);

        int[] reverse = reverse(arrays);
        printArray(reverse);

    }

    public static void printArray(int[] args) {
        for (int i =0 ; i < args.length ; i++){
            System.out.println(args[i]);
        }
    }

    public static int[] reverse(int[] args){
        int[] result = new int[args.length];
        for (int i =0, j=result.length-1 ; i < args.length ; i++, j--){
            result[j] = args[i];
        }
        return result;
    }
}
